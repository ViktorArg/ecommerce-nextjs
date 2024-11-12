"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'
import PropTypes from 'prop-types'

interface ProductInfoProps {
    name: string;
    category: string;
    image: any;
    price: Number;
    description: String;
    discount: Number;
}


const ProductInfo = (props: ProductInfoProps) => {
    const { name, category, image, price, description, discount } = props;
    useEffect(() =>{
        const fetchData = async () => {
            // const response : any = await fetch('https://v8qq7sxtn2.execute-api.us-east-1.amazonaws.com/dev/giftcard/single',{method: 'GET'})
            // const data = await response.json();
            // setDatos(data[0]);
            const response : any = await fetch('./data.json',{method: 'GET'})
            const data = await response.json();
            console.log("ProductInfo 23", data)
            // setDatos(data);
        }
        fetchData();
      },[])
  return (
    <section className='sectionGrid flex flex-nowrap space-x-0'>
        <div className='w-1/2' >
            <img 
                src={image}
                width={300}
                height={300}
                alt='product_image'
                className='h-96'
            />
            {/* <Image
                src='/Rugrats-Twins-Birthday-Invitation.webp'
                width={300}
                height={300}
                alt='product_image'
                className='h-96'
            /> */}
        </div>
        <div className='w-1/2' >
            <div className='product_card'>
                <div className='grid justify-items-center text-center'>
                    <p className="desc">
                        {category}
                    </p>
                    <p className="desc">
                        {name}
                    </p>
                    {/* <h4 className=''>
                        {description}
                    </h4> */}
                    <p className='desc font-extrabold'>
                        {`$${price}`}
                    </p>
                    <p className="desc">
                        {description}
                    </p>
                    <button
                        type='button'
                        className='btn_primary mt-4'
                        >
                            ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

// ProductInfo.propTypes = {
//     name: PropTypes.string,
//     image:PropTypes.string,
//     price: PropTypes.number,
//     description: PropTypes.string,
//     discount: PropTypes.number
// }

export default ProductInfo