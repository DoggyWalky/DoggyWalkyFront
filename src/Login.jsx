import React from 'react';

export default function Login() {
  return (
    <div>
      <content>
        <h1> DoggyWalky</h1>
        <p className='font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          ut dolores velit nobis possimus beatae corporis vel ad fuga sit
          quibusdam voluptate eligendi optio inventore libero, ea esse, quae
          ducimus?
        </p>
      </content>
      <login>
        <h1>Login</h1>
        <div>
          <div>
            <h3>E-mail</h3>
            <input type='text' />
          </div>
          <div>
            <h3>Password</h3>
            <input type='password' />
          </div>
        </div>
      </login>
    </div>
  );
}
