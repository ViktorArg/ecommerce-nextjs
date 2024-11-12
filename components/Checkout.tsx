
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Link from 'next/link'
import { useAppContext } from '@context/AppContext'
import {
  calculatedTotalProductAmount,
  calculatedProductDiscount,
  calculatedTotalDiscountAmount,
  inTheCart
} from '@utils/functions'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Checkout() {
  const { cart, addProductToTheCart, substractProductFromTheCart } = useAppContext();
  console.log("cart", cart)
  const [agreed, setAgreed] = useState(false);
  const [selectedSize, setSelectedSize] = useState("m");


  return (
    <div className="bg-gray-100 rounded-md max-w-7xl mx-auto">
      <div className="grid grid-cols-1 py-8 px-8 gap-x-12 gap-y-10 lg:grid-cols-2 border-gray-200">
        <div className="sm:col-span-1">
          <form action="#" method="POST" className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <h3 className="text-lg font-medium text-gray-900">Contact information</h3>
              </div>
              <div className="sm:col-span-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full border-b border-gray-200 my-4" />
              <div className="sm:col-span-full">
                <h3 className="text-lg font-medium text-gray-900">Billing information</h3>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full border-b border-gray-200 my-4" />
              <div className="sm:col-span-full">
                <h3 className="text-lg font-medium text-gray-900">Delivery method</h3>
              </div>
              <div className="sm:col-span-full">

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-8 lg:grid-cols-2">
                    <RadioGroup.Option
                      key={"5x7"}
                      value={"5x7"}
                      disabled={false}
                      className={({ active }) =>
                        classNames(
                          true
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          active ? 'ring-2 ring-indigo-500' : '',
                          'relative rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            <div className='flex justify-between'>
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                              <div className='grid grid-cols-1 gap-4 content-between'>
                                <div>
                                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    Standard
                                  </label>
                                  <p className="mt-1 text-sm text-gray-500">
                                    4-10 business days
                                  </p>
                                </div>
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                  $5.00
                                </label>
                              </div>
                              <div>
                                {checked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 nz sb ayh text-indigo-500'><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>}
                              </div>
                            </div>
                          </RadioGroup.Label>
                        </>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option
                      key={"4x6"}
                      value={"4x6"}
                      disabled={false}
                      className={({ active }) =>
                        classNames(
                          true
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          active ? 'ring-2 ring-indigo-500' : '',
                          'relative rounded-md border py-3 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            <div className='flex justify-between'>
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                              <div className='grid grid-cols-1 gap-4 content-between'>
                                <div>
                                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    Express
                                  </label>
                                  <p className="mt-1 text-sm text-gray-500">
                                    2-5 business days
                                  </p>
                                </div>
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                  $16.00
                                </label>
                              </div>
                              <div>
                                {checked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-6 h-6 nz sb ayh text-indigo-500'><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>}
                              </div>
                            </div>
                          </RadioGroup.Label>
                        </>
                      )}
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>
              </div>
              <div className="sm:col-span-full border-b border-gray-200 my-4" />
              <div className="sm:col-span-full">
                <h3 className="text-lg font-medium text-gray-900">Payment details</h3>
              </div>
              <div className="sm:col-span-2 flex items-center gap-x-2">
                <input type="radio" />
                <span className="block text-sm font-semibold leading-6 text-gray-900">
                  Credit card
                </span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-x-2">
                <input type="radio" className="default:ring-2" />
                <span className="block text-sm font-semibold leading-6 text-gray-900">
                  PayPal
                </span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-x-2">
                <input type="radio" />
                <span className="block text-sm font-semibold leading-6 text-gray-900">
                  eTransfer
                </span>
              </div>
              <div className="sm:col-span-full">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Card number
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name on card
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Expiration date (MM/YY)
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  CVC
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full border-b border-gray-200 my-4" />
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-full">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
          </form>
        </div>
        <div className="sm:col-span-1">
          <div className="">
            <h3 className="text-lg font-medium text-gray-900">Order summary</h3>
          </div>
          <div className="mt-8 bg-white rounded-md">
            <div className="flow-root">
              <ul role="list" className="my-6 divide-y divide-gray-200">
                {cart && cart.map((product) => (
                  <li key={product.id} className="flex py-6 px-8">
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
                          <p className="ml-4">${calculatedProductDiscount(product)}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                          <p className="ml-4 text-base font-medium text-gray-500 line-through">${(product.price).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex flex-1 items-center">
                          <p className="text-gray-500 mr-2">Qty</p>
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
                            {inTheCart(product.id, cart)}
                          </a>
                          <a
                            onClick={() => {
                              addProductToTheCart(product)
                            }}
                            className="rounded-md cursor-pointer bg-white px-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            +
                          </a>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => substractProductFromTheCart(product)}
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
            <div className="border-t border-gray-200 py-6 px-8">
              <div className="flex justify-between py-2 text-base font-sm text-gray-900">
                <p>Subtotal</p>
                <p>${calculatedTotalProductAmount(cart)}</p>
              </div>
              <div className="flex justify-between py-2 text-base font-sm text-gray-900">
                <p>Discount</p>
                <p>-${calculatedTotalDiscountAmount(cart)}</p>
              </div>
              <div className="flex justify-between py-2 text-base font-sm text-gray-900">
                <p>Taxes</p>
                <p>$0.00</p>
              </div>
              <div className="my-6 border-t border-gray-200" />
              <div className="flex justify-between text-base font-semibold text-gray-900">
                <p>Total</p>
                <p>${calculatedTotalProductAmount(cart)}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 p-8">
              <div className="">
                <Link href="/checkout" passHref={true}>
                  <span
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Confirm order
                  </span>
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
