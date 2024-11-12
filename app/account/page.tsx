"use client";

import Login from '@components/Login';
import { AuthService } from '@services/Authservice';
import { useState } from 'react';

const authService = new AuthService();

export default function Account() {
  
  const [userName, setUserName] = useState<string | undefined>(undefined);
  return (
    <section className='w-full flex-center flex-col'>
      <Login authService={authService} setUserNameCb={setUserName}/>
      <h1>{userName}</h1>
    </section>
  )
}
