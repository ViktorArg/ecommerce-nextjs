import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAppContext } from '@context/AppContext'
import { calculatedProductDiscount, calculatedTotalDiscountAmount, calculatedTotalProductAmount, inTheCart } from '@utils/functions'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

interface ShoppingBagProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ShoppingBag(props: ShoppingBagProps) {
  const { cart, addProductToTheCart, substractProductFromTheCart } = useAppContext();
  const { open, setOpen } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping bag</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="">
                        <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                          {cart && cart.map((product) => (
                            <li key={product.id} className="flex pt-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageUrl}
                                  alt={product.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.imageUrl}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">${ calculatedProductDiscount(product) }</p>
                                  </div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    <p className="ml-4 text-base font-medium text-gray-500 line-through">${ (product.price).toFixed(2) }</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex flex-1 items-center">
                                    <p className="text-gray-500 mr-2">Qty</p>
                                    <a
                                      onClick={()=>{
                                        substractProductFromTheCart(product)
                                      }}
                                      className="rounded-md cursor-pointer bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                      -
                                    </a>
                                    <a
                                      className="rounded-md bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                      {inTheCart(product.id, cart)}
                                    </a>
                                    <a
                                      onClick={()=>{
                                      addProductToTheCart(product)}}
                                      className="rounded-md cursor-pointer bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                      +
                                    </a>
                                  </div>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={()=> substractProductFromTheCart(product)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between py-2 text-base font-sm text-gray-900">
                        <p>Subtotal</p>
                        <p>${ calculatedTotalProductAmount(cart) }</p>
                      </div>
                      <div className="flex justify-between py-2 text-base font-sm text-gray-900">
                        <p>Discount</p>
                        <p>-${ calculatedTotalDiscountAmount(cart) }</p>
                      </div>
                      <div className="my-6 border-t border-gray-200" />
                      <div className="flex justify-between text-base font-semibold text-gray-900">
                        <p>Total</p>
                        <p>${calculatedTotalProductAmount(cart)}</p>
                      </div>
                      <div className="mt-6">
                        <Link href="/checkout" passHref={true} onClick={()=>setOpen(false)}>
                          <span
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </span>
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
