import React, { useEffect } from 'react';


type Props = {
  selectedAddress: Coordinate[]; // 좌표 객체들의 배열
};

type Coordinate = {
  La: number;
  Ma: number;
};




const RegionMap: React.FC<Props> = ({ selectedAddress }) => {
  
  useEffect(() => {
    if (!selectedAddress) return; // 선택된 주소가 없으면 함수 종료
    // Kakao Maps API로 지도 표시 및 마커 설정
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new window.kakao.maps.LatLng(selectedAddress[0], selectedAddress[1]), // 선택된 주소의 좌표를 중심으로 설정
      level: 5 // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOptions); // 지도 객체 생성

    // 마커 설정
    const markerPosition = new window.kakao.maps.LatLng(selectedAddress[0], selectedAddress[1]); // 마커의 좌표 설정
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      map: map // 마커를 지도에 표시
    });
    console.log(selectedAddress)
    // 지도 중심과 마커 위치 설정
    map.setCenter(markerPosition); // 지도의 중심을 마커의 위치로 설정
    marker.setPosition(markerPosition); // 마커의 위치 설정
  }, [selectedAddress]); // selectedAddress가 변경될 때마다 useEffect 재실행

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div> // 지도를 표시할 div 요소 설정
  );
};

export default RegionMap;
