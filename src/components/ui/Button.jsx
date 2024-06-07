import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button className='btn btn-outline btn-accent' onClick={onClick}>
      {text}
    </button>
  );
}
