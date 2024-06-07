import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapContainer() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  // 1) 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 초기 중심 좌표 (제주시)
        level: 3,
      };

      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);
      setMarker(new window.kakao.maps.Marker());

      // 접속 위치 가져와서 지도 중심 좌표로 설정
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const currentPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            mapInstance.panTo(currentPosition);
          },
          () => alert('위치 정보를 가져오는데 실패했습니다.'),
          {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
          }
        );
      } else {
        alert('Geolocation을 지원하지 않는 브라우저입니다.');
      }
    });
  }, []);

  // 정상적으로 현재 위치를 가져올 경우 실행되는 함수
  const getPosSuccess = (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );
    // 지도를 이동 시킨다.
    map.panTo(currentPos);

    // 기존 마커를 제거하고 새로운 마커를 넣는다.
    marker.setMap(null);
    marker.setPosition(currentPos);
    marker.setMap(map);
  };

  return (
    <div>
      <div style={{ width: '80%', height: '500px' }}></div>
    </div>
  );
}
