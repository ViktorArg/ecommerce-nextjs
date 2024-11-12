"use client";

import Contact from "@components/library/forms/Contact"
import Header from "@components/library/sections/Header"
import Stats from "@components/library/sections/Stats"
import Team from "@components/library/sections/Team";
import Testimonials from "@components/library/sections/Testimonials";

export default function Home() {

  return (
    <section className='w-full flex-center flex-col'>
      <Header />
      <Stats />
      <Team />
      <Contact />
      <Testimonials />
    </section>
  )
}
