import React, { useState, useEffect } from "react";

export default function PostFilter({ handleFilterChange, closefilter }) {
    
    const [dogSizeFilter, setDogSizeFilter] = useState([]);
    const [statusFilter, setStatusFilter] = useState([]);
 
     // 체크박스 선택 상태 변경 핸들러
  // 첫 렌더링 시 모든 체크박스가 선택되도록 설정
  useEffect(() => {
    // 초기 필터링 옵션 설정
    setDogSizeFilter([]); // 예시로 'small', 'medium', 'large' 모두 선택
    setStatusFilter([]); // 예시로 'completed', 'incomplete' 모두 선택
  }, []);

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'dogSize') {
      if (checked) {
        setDogSizeFilter(prevState => [...prevState, value]);
      } else {
        setDogSizeFilter(prevState => prevState.filter(item => item !== value));
      }
    } else if (name === 'status') {
      if (checked) {
        setStatusFilter(prevState => [...prevState, value]);
      } else {
        setStatusFilter(prevState => prevState.filter(item => item !== value));
      }
    }
  };

  // 필터 적용 버튼 클릭 핸들러
  const applyFilter = () => {
    handleFilterChange({ dogSize: dogSizeFilter, status: statusFilter });
    closefilter()
  };
  // 필터 초기화 버튼 클릭 핸들러
  const resetFilter = () => {
    setDogSizeFilter([]);
    setStatusFilter([]);
  };
    

    return (
      <div className="border-4 border-blue rounded-2xl overflow-hidden absolute right-32 z-10 shadow-lg bg-white">
        <div className="p-4 grid justify-items-start rounded-t-2xl">
          <h2 className="mt-2 text-lg font-bold">크기</h2>
          <div className="w-fit flex mt-2 pb-2 border-b">
            <div className="mr-4">
              <input className="mr-2" type="checkbox" name="dogSize" value="small" checked={dogSizeFilter.includes('small')} onChange={handleCheckboxChange} />
              <label>소형견</label>
            </div>
            <div className="mr-4">
              <input className="mr-2" type="checkbox" name="dogSize" value="medium" checked={dogSizeFilter.includes('medium')} onChange={handleCheckboxChange} />
              <label>중형견</label>
            </div>
            <div className="mr-2">
              <input className="mr-2" type="checkbox" name="dogSize" value="large" checked={dogSizeFilter.includes('large')} onChange={handleCheckboxChange} />
              <label>대형견</label>
            </div>
          </div>
          <h2 className="mt-4 text-lg font-bold">상태</h2>
          <div  className="flex mt-2">
            <div className="mr-4">
              <input className="mr-2" type="checkbox" name="status" value="completed" checked={statusFilter.includes('completed')} onChange={handleCheckboxChange} />
              <label>완료</label>
            </div>
            <div className="mr-2">
              <input className="mr-2" type="checkbox" name="status" value="incomplete" checked={statusFilter.includes('incomplete')} onChange={handleCheckboxChange} />
              <label>미완료</label>
            </div>
          </div>
          <button className="flex ml-auto" onClick={resetFilter}>
            <img src="images/reset.png"/>
            <p>초기화</p>
          </button>
      </div>
      <button className="w-72 h-14 text-white font-semibold border border-blue p-2 bg-blue" onClick={applyFilter}>적용하기</button>
    </div>
    )
}
