"use client"
import Content from '@components/library/sections/Content';
import { Carousel } from '@material-tailwind/react';

// export async function generateMetadata({ params, searchParams }) {
//   const product = await getProduct(params.id);
//   return { 
//     title: product.title
//   };
// }


export default async function Home() {
//   const res = await fetch(
//     `http://localhost:3000/api/users`,
//     { cache: 'no-store' }
//     // { next: { revalidate: 10 } }
//   )
  
//   const data = await res.json();

  return (
    <div>
      <Content />
    </div>
  )
}
