// FloatingButtonWithPopup.jsx

import React, { useState } from 'react';

function FloatingButtonWithPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Floating Button */}
      <div className='fixed bottom-4 right-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          Floating Button
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='bg-white p-8'>
            <p>팝업 내용</p>
            <button
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setIsPopupOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButtonWithPopup;
