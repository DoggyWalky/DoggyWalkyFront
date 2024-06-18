import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import RegionMap from './RegionMap';

type Props = {
  onComplete: (bcode: string) => void;
};

type Coordinate = {
  La: number;
  Ma: number;
};

const PostRegion: React.FC<Props> = ({ onComplete }) => {
  const [selectedAddress, setSelectedAddress] = useState<Coordinate[]>([]);

  const handleComplete = (data: { bcode: string, address: string }) => {
    console.log('주소 검색 완료:', data);
    onComplete(data.bcode); // bcode만을 인자로 넘겨줍니다.

    // 주소가 없으면 실행하지 않습니다.
    if (!data.address) return;

    // Kakao Maps API의 Geocoder를 사용하여 주소를 좌표로 변환합니다.
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function (results: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        // 변환된 좌표를 사용할 수 있습니다.
        const newCoords: Coordinate = {
          La: results[0].y,
          Ma: results[0].x
        };
        console.log('변환된 좌표:', newCoords);

        // 기존 selectedAddress에 새로운 좌표 추가
        setSelectedAddress([...selectedAddress, newCoords]);
      } else {
        console.error('지오코더 에러:', status);
      }
    });
  };

  useEffect(() => {
    console.log('현재 selectedAddress:', selectedAddress);
  }, [selectedAddress]);

  return (
    <div>
      <DaumPostcode
        onComplete={handleComplete}
        autoClose
        animation
        defaultQuery="대한민국" // 초기 검색지역 설정
        theme={{
          bgColor: "#f5f5f5", // 배경 색상
          searchBgColor: "#ffffff", // 검색창 배경 색상
          postcodeTextColor: "#333333", // 우편번호 글자 색상
          outlineColor: "#e0e0e0", // 외곽선 색상
        }}
      />
      {selectedAddress.length > 0 && (
        <RegionMap selectedAddress={selectedAddress} />
      )}
    </div>
  );
};

export default PostRegion;

