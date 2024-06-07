import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapContainer() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [polyline, setPolyline] = useState<any>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const currentPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            mapInstance.panTo(currentPosition);

            // 이전 라인 제거
            if (polyline) {
              polyline.setMap(null);
            }

            // 새로운 마커 생성
            const markerInstance = new window.kakao.maps.Marker({
              position: currentPosition,
            });
            markerInstance.setMap(mapInstance);
            setMarker(markerInstance);

            // 라인 추가 함수 호출
            addLine(currentPosition);
          },
          () => alert('위치 정보를 가져오는데 실패했습니다.'),
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
          }
        );
      } else {
        alert('Geolocation을 지원하지 않는 브라우저입니다.');
      }
    });
  }, []);

  function addLine(currentPosition: any) {
    if (!map || !currentPosition) return;

    // 이전 위치가 없으면 라인 추가 불가
    if (!marker) return;

    const linePath: any[] = [marker.getPosition(), currentPosition];
    const newPolyline = new window.kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 2,
      strokeColor: 'red',
      strokeOpacity: 0.7,
      strokeStyle: 'solid',
    });

    newPolyline.setMap(map);
    setPolyline(newPolyline);
  }

  return (
    <div>
      <div id='map' style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}
