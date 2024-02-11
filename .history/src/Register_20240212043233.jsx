import React from 'react';

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <span>E-mail</span>
        <input type='text' />
      </div>
      <div>
        <span>Password</span>
        <input type='password' />
      </div>
      <div>
        <span>Nickname</span>
        <input type='text' />
      </div>
      <div>
        <span>PhonNumber</span>
        <input type='number' />
      </div>
      <div>
        <span>Adress</span>
        <input type='text' />
      </div>
    </div>
  );
}
