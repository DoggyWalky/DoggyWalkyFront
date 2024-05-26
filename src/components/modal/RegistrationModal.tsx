import React, { useEffect, useRef } from 'react';
export default function RegistrationModal({ showModal, setShowModal }: any) {
  const wrapperRef = useRef<any>();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current === null) {
      return;
    }

    if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
      setShowModal({ ...showModal, state: false });
    } else {
      setShowModal({ ...showModal, state: true });
    }
  };

  return (
    <>
      <div className="justify-center items-center fixed Z-[999]">
        <div className={'relative w-[90%]'}>
          <div
            className="relative my-6 mx-auto max-w-[70rem]  overflow-x-auto "
            ref={wrapperRef}
            id={'center_scroll_custom2'}
          >
            <button
              onClick={() => setShowModal({ ...showModal, state: false })}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div
              className={`sm:h-[95vh] h-[75vh] w-[45em]' : '4xs:h-unset sm:h-auto h-[78vh] sm:w-[45em] w-[40em]'} relative  sm:w-full  overflow-x-auto overflow-y-auto  bg-[#fff] sm:p-[5em] py-[5em] px-[2em]`}
            >
              modal
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
