import React, { useState, useEffect } from 'react';
// axios import
import axios from 'axios';

// axios baseURL 설정 - jsonplaceholder mock 서버 url 설정
axios.defaults.baseURL = 'https://http://localhost:3000';

// axios를 이용한 HTTP GET 요청
const getList = () => axios.get('/');

const App = () => {
  // post 데이터 저장 state
  const [list, setList] = useState([]);

  // App 컴포넌트 마운트 시 getAll() 함수 호출
  useEffect(() => {
    getList()
      .then((response) => {
        // 정상적으로 데이터를 읽어오면 데이터 저장 state에 응답 데이터 저장
        // 응답 데이터는 response.data에 저장됨
        setList(response.data.slice(90, 110));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>userId</td>
          </tr>
        </thead>
        <tbody>
          {/* 데이터 저장 state 값 출력 */}
          {list.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
