import React, { useState, useEffect } from "react";

export default function PostFilter({ handleFilterChange }) {
    
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
  };
    

    return (
        <div>
      <div>
        <input type="checkbox" name="dogSize" value="small" checked={dogSizeFilter.includes('small')} onChange={handleCheckboxChange} />
        <label>소형견</label>
      </div>
      <div>
        <input type="checkbox" name="dogSize" value="medium" checked={dogSizeFilter.includes('medium')} onChange={handleCheckboxChange} />
        <label>중형견</label>
      </div>
      <div>
        <input type="checkbox" name="dogSize" value="large" checked={dogSizeFilter.includes('large')} onChange={handleCheckboxChange} />
        <label>대형견</label>
      </div>
      <div>
        <input type="checkbox" name="status" value="completed" checked={statusFilter.includes('completed')} onChange={handleCheckboxChange} />
        <label>완료</label>
      </div>
      <div>
        <input type="checkbox" name="status" value="incomplete" checked={statusFilter.includes('incomplete')} onChange={handleCheckboxChange} />
        <label>미완료</label>
      </div>
      <button onClick={applyFilter}>Apply Filters</button>
    </div>
    )
}
