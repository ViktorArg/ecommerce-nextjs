"use client";
import { useParams } from 'next/navigation';
import ProductInfo from "@components/initial/ProductInfo"
import useGetProductByid from "@hooks/useGetProductByid"
import Logo from '@utils/Logo';
import Image from 'next/image'
import { useAppContext } from '@context/AppContext';
import ProductOverview from '@components/library/ecommerce/ProductOverview';


export default function ProductInfoView() {
  // const { product } = useAppContext();
  // console.log("product context", product)
  // const params = useParams();
  // console.log("params", params)
  // const {categoryName, productName, productID } = params;
  // const { productInfo } = useGetProductByid(productID);
  // const { name, 
  // category,
  // image,
  // price,
  // description,
  // discount } = product;
  return (
    <section className='w-full flex-center flex-col'>
      {/* <ProductInfo
        name={name}
        category={category}
        image={image}
        price={price}
        description={description}
        discount={discount}
      /> */}
      <ProductOverview />
    </section>
  )
}
