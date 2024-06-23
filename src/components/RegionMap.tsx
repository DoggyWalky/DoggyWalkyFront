import React, { useEffect } from 'react';

type Coordinate = {
  La: number;
  Ma: number;
};

type Props = {
  selectedAddress: Coordinate | null; // 선택된 주소 객체
};

const RegionMap: React.FC<Props> = ({ selectedAddress }) => {
  useEffect(() => {
    // Kakao Maps API로 지도 초기화
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 (서울 좌표)
      level: 5 // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOptions); // 지도 객체 생성

    // 선택된 주소가 있을 경우, 지도의 중심을 해당 좌표로 이동하고 마커를 설정합니다.
    if (selectedAddress) {
      const markerPosition = new window.kakao.maps.LatLng(selectedAddress.La, selectedAddress.Ma); // 마커의 좌표 설정
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map // 마커를 지도에 표시
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      const infowindow = new window.kakao.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:6px 0;">' + selectedAddress.La + ', ' + selectedAddress.Ma + '</div>'
      });
      infowindow.open(map, marker);

      // 지도 중심과 마커 위치 설정
      map.setCenter(markerPosition); // 지도의 중심을 마커의 위치로 설정
      marker.setPosition(markerPosition); // 마커의 위치 설정
    }
  }, [selectedAddress]); // selectedAddress가 변경될 때마다 useEffect 재실행

  return (
    <div id="map" style={{ width: '400px', height: '400px' }}></div> // 지도를 표시할 div 요소 설정
  );
};

export default RegionMap;
