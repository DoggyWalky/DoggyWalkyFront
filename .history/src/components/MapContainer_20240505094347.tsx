import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapContainer() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 초기 중심 좌표 (제주시)
        level: 3,
      };

      const mapInstance = new window.kakao.maps.Map(container, options);
      setMap(mapInstance);

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

            // 마커 생성 및 표시
            const markerInstance = new window.kakao.maps.Marker({
              position: currentPosition,
            });
            markerInstance.setMap(mapInstance);
            setMarker(markerInstance);
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

  return (
    <div>
      <div id='map' style={{ width: '80%', height: '400px' }}></div>
    </div>
  );
}
