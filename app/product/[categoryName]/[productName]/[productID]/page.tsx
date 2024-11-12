"use client";
import { useParams } from 'next/navigation';
import ProductInfo from "@components/ProductInfo"
import useGetProductByid from "@hooks/useGetProductByid"
import Logo from '@utils/Logo';
import Image from 'next/image'
import { useAppContext } from '@context/AppContext';
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { findProductById } from '@utils/functions';
import { ProductEntry } from '@models/model';

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductInfoView() {
  const params = useParams();
  const { products, cart, addProductToTheCart  } = useAppContext();
  const [product, setProduct] = useState<ProductEntry | undefined>(undefined)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")
  console.log("params", params, products)
  const {categoryName, productName, productID } = params;
  const { productInfo } = useGetProductByid(productID);
  console.log("product", product)
  const { name, 
  category,
  image,
  price,
  description,
  discount } = productInfo;

  useEffect(()=>{
    const getProduct = async () => {
      const newProduct = findProductById(productID, products);
      setProduct(newProduct);
    }
    if(!product){
      getProduct();
    }
  },[])
  console.log("__dirname 2", __dirname)
  return (
    <div className="bg-gray-100 py-8 sm:px-6 lg:px-24">
      <ProductInfo />
    </div>
  )
}
