"use client";

import Login from "@components/Login";
import Marketplace from "@components/Marketplace";
import { AuthService } from "@services/Authservice";
import { DataService } from "@services/DataService";
import { useState } from "react";


const authService = new AuthService();
const dataService = new DataService(authService);

export default function Home() {
  const [userName, setUserName] = useState<string | undefined>(undefined);

  return (
    <section className='bg-gray-100 py-8 sm:px-6 lg:px-24'>
      <Marketplace dataService={dataService}/>
    </section>
  )
}
