import React, { useEffect, useState, useCallback, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}

interface Marker {
  getPosition: () => any;
  setMap: (map: any | null) => void;
}

export default function MapContainer() {
  const [map, setMap] = useState<any | null>(null);
  const currentMarkerRef = useRef<Marker | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [gpsList, setGpsList] = useState<
    Array<{
      jobPostId: number;
      longitude: number;
      latitude: number;
      timestamp: number;
    }>
  >([]);

  const displayMarker = useCallback(
    (locPosition: any) => {
      if (currentMarkerRef.current) {
        currentMarkerRef.current.setMap(null);
      }

      const newMarker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      currentMarkerRef.current = newMarker;
      if (map) {
        map.setCenter(locPosition);
      }
      setMarkers((prev) => {
        const updatedMarkers = [...prev, newMarker];
        addLine(updatedMarkers);
        return updatedMarkers;
      });
    },
    [map]
  );

  const success = useCallback(
    (position: Position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const locPosition = new window.kakao.maps.LatLng(lat, lon);

      if (map) {
        displayMarker(locPosition);
        setGpsList((prev) => [
          ...prev,
          {
            jobPostId: 3,
            longitude: lon,
            latitude: lat,
            timestamp: position.timestamp,
          },
        ]);
      }
      // jobPostId를 백엔드로 전송
      axios
        .post(`/api/job-post/${newEntry.jobPostId}/walkComplete`, newEntry)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [map, displayMarker]
  );

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);
    });
  }, []);

  useEffect(() => {
    if (map) {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, error, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      } else {
        alert('Geolocation을 지원하지 않는 브라우저입니다.');
      }
    }
  }, [map, success]); // map이 설정되면 위치 추적 시작

  const addLine = useCallback(
    (updatedMarkers: Marker[]) => {
      if (updatedMarkers.length === 0) return;

      const linePath = updatedMarkers.map((marker) => marker.getPosition());

      const polyline = new window.kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 2,
        strokeColor: 'red',
        strokeOpacity: 0.7,
        strokeStyle: 'solid',
      });

      polyline.setMap(map);
    },
    [map]
  );

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  axios
    .post('/api/job-post/{jobPostId}/walkComplete', {
      name: 'jobPostId',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <div id='map' style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}
