"use client";
import Link from 'next/link'
import {nameLink} from '@utils/functions'
import { usePathname, useRouter } from "next/navigation";
// import { useProductContext } from '@context/AppContext';

interface ProductCardProps {
    name: string;
    category: string;
    description: String;
    image: string;
    price: Number;
    discount: Number;
}

const ProductCard = (props: ProductCardProps) => {
    // const { addProduct } = useProductContext();
    const { name, category, image, price, description, discount } = props;
    console.log("name", name, nameLink(name))
    const pathName = usePathname();
    const router = useRouter();
  return (
    <div className='product_card'>
        <div onClick={()=> {
            // addProduct(props)
            router.push(`/product`)} 
            }>
            <div>
                <img
                    src={image}
                    width={300}
                    height={300}
                    alt='product_image'
                    className='h-96'
                />
                {/* <span className=''>
                    {`-${discount}%`}
                </span> */}
            </div>
            <div className='grid justify-items-center text-center'>
                <p className="desc">
                    {name}
                </p>
                {/* <h4 className=''>
                    {description}
                </h4> */}
                <p className='desc font-extrabold'>
                    {`$${price}`}
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
  )
}

// ProductCard.propTypes = {
//     name: PropTypes.string,
//     image:PropTypes.string,
//     price: PropTypes.number,
//     description: PropTypes.string,
//     discount: PropTypes.number
// }

export default ProductCard