import Link from "next/link";
import { ProductEntry } from "../models/model";
import { useAppContext } from "@context/AppContext";
import { useEffect, useState } from "react";

interface ProductListProps {
  products: ProductEntry[] | undefined;
}

export default function ProductList({ products }: ProductListProps) {
  const { cart, addProductToTheCart, substractProductFromTheCart } = useAppContext();

  const inTheCart = (id: string) => {
    const already = cart.find((cartProduct) => cartProduct.id === id);
    if (already) {
      return already.quantity
    } else {
      return 0;
    }
  };

  return (
    <div className="bg-white">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
        {products && products.map((product) => (
          <div key={product.id} className="flex flex-wrap content-stretch relative group p-2 rounded-md hover:border hover:border-gray-500">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-2 w-full">
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div>
              <h3 className="text-base text-gray-700 hover:text-indigo-600">
                {/* <a href={product.href}> */}
                <Link href={`/product/${product.category}/${product.name}/${product.id}`} passHref={true}>
                  <span>
                    {product.name}
                  </span>
                </Link>
              </h3>
            </div>
            <div className="w-full flex justify-between items-baseline">
              <div className="flex">
                <p className="text-sm font-medium text-gray-900 mr-2">${product.discount && product.price - (product.price * product.discount * 0.01)}</p>
                <p className="text-sm font-medium text-gray-500 line-through mr-2">
                  ${product.price}
                </p>
              </div>
              {
                !inTheCart(product.id) ?
                  <Link href={`/product/${product.category}/${product.name}/${product.id}`} passHref={true}
                    // onClick={() => {
                    //   addProductToTheCart({ quantity: 1, ...product })
                    // }}
                    className="rounded-md cursor-pointer bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    + Add
                  </Link>
                  :
                  <div>
                    <a
                      onClick={() => {
                        substractProductFromTheCart(product)
                      }}
                      className="rounded-md cursor-pointer bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      -
                    </a>
                    <a
                      className="rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {inTheCart(product.id)}
                    </a>
                    <a
                      onClick={() => {
                        addProductToTheCart({ quantity: 1, ...product })
                      }}
                      className="rounded-md cursor-pointer bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      +
                    </a>
                  </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
