"use client";

import Image from 'next/image'
import ProductCard from './ProductCard'

export const data = [
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rugrats-Twins-Birthday-Invitation.webp",
    price: 6.99,
    quantity: 2,
    subtotal: 12,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
    price: 645.99,
    quantity: 12,
    subtotal: 1200,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rugrats-Twins-Birthday-Invitation.webp",
    price: 16.99,
    quantity: 4,
    subtotal: 120,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
    price: 6.99,
    quantity: 2,
    subtotal: 12,
  },
];

export const productData = [
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rugrats-Twins-Birthday-Invitation.webp",
    price: 6.99,
    category: 'hrllo',
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin’s birthday party.",
    discount: 2,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
    category: 'hrllo',
    price: 6.99,
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin’s birthday party.",
    discount: 2,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rugrats-Twins-Birthday-Invitation.webp",
    category: 'hrllo',
    price: 6.99,
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin’s birthday party.",
    discount: 2,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    image: "/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
    category: 'hrllo',
    price: 6.99,
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin’s birthday party.",
    discount: 2,
  },
];


const Cart = () => {
  return (
    <div className='sectionGrid'>
      <table className="table-auto text-center border-2 border-terceary-teal w-full">
        <thead className="">
          <tr className="table_header">
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          { data.map((item) => (
            <tr className="border border-b-terceary-teal text-secundary-teal text-xl odd:bg-white even:bg-slate-200" key={item.name}>
              <td className='desc'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto"> */}
                <svg className="h-8 w-8 stroke-primary-teal ml-auto" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </td>
              <td className="">
                <Image
                  src={item.image}
                  width={100}
                  height={250}
                  alt='product_image'
                  className='ml-auto m-4 h-[10rem]'
                />
              </td>
              <td >{ item.name }</td>
              <td >$ { item.price }</td>
              <td >{ item.quantity }</td>
              <td >$ { item.price * item.quantity }</td>
            </tr>
            )
          )}
        </tbody>
      </table>
      <div className='flex mt-8 gap-8' >
        <div className='border-2 border-terceary-teal w-1/2' >
          <h1 className='box_header'>
            You may be interested in…
          </h1>
          <div className='grid grid-cols-2 p-4 gap-4'>
            { productData.map((item) => (
              <ProductCard name={item.name} category={item.category} image={item.image} price={item.price} description={item.description} discount={item.discount} key={item.name}/>
              )
            )}
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-4 border-2 border-terceary-teal w-1/2 h-1/2' >
          <h1 className='box_header col-span-2 p-4 border border-transparent border-b-terceary-teal'>
            Cart totals
          </h1>
          <span className="desc border border-transparent border-b-terceary-teal">
            Subtotal
          </span>
          <span className='desc border border-transparent border-b-terceary-teal'>
            500
          </span>
          <p className="desc border border-transparent border-b-terceary-teal">
            Total
          </p>
          <p className="desc border border-transparent border-b-terceary-teal">
            1000
          </p>
          <button
            type='button'
            className='btn_primary col-span-2 m-4'
          >
            PROCEED TO CHECKOUT
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart