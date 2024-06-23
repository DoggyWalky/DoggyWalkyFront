import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import RegionMap from './RegionMap';

type Props = {
  onComplete: (bcode: string) => void,
};

type Coordinate = {
  La: number;
  Ma: number;
};

const PostRegion: React.FC<Props> = ({ onComplete }) => {
  const [selectedAddress, setSelectedAddress] = useState<Coordinate | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // 브라우저 history state를 이용하여 이전 주소 관리
  const [historyState, setHistoryState] = useState<Coordinate | null>(null);

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

        // 이전 상태 저장
        setHistoryState(selectedAddress);

        // 새로운 좌표 설정
        setSelectedAddress(newCoords);
      } else {
        console.error('지오코더 에러:', status);
        // 오류 처리를 원하는 방식으로 구현할 수 있습니다.
        // 예: 사용자에게 오류 메시지를 표시하거나, 기본 좌표를 설정합니다.
        setSelectedAddress(null); // 예: 오류 발생 시 selectedAddress를 null로 설정
      }
    });
  };

  useEffect(() => {
    // 브라우저 history 변경 시 실행될 함수
    const handleHistoryChange = () => {
      if (historyState) {
        setSelectedAddress(historyState);
      }
    };

    // history 변경 이벤트 리스너 등록
    window.addEventListener('popstate', handleHistoryChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('popstate', handleHistoryChange);
    };
  }, [historyState]);

  useEffect(() => {
    // 선택된 주소가 변경될 때마다 historyState 업데이트
    if (selectedAddress) {
      window.history.pushState(selectedAddress, ''); // 브라우저 history 업데이트
    }
  }, [selectedAddress]);

  return (
    <div>
      <p onClick={() => setIsOpen(true)} className='cursor-pointer hover:underline'>어디서 산책하고 싶으신가요?</p>
      {
        isOpen === true 
        ?
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
        : ''
      }
      <RegionMap selectedAddress={selectedAddress} />
    </div>
  );
};

export default PostRegion;
