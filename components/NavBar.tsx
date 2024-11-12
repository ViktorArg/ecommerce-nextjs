import { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react'
import { Dialog, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import { 
  Bars3Icon,
  HeartIcon,
  ShoppingBagIcon,
  XMarkIcon,
  VideoCameraIcon,
  CakeIcon,
  TagIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useAppContext } from '@context/AppContext';

const products = [
  { name: 'Invitations', description: 'Get cards or video invitations', href: '/products', icon: VideoCameraIcon },
  { name: 'Shirts', description: 'Get your shirt in any color', href: '/products', icon: PhotoIcon },
  { name: 'Toppers', description: 'Cake and cupcakes toppers', href: '/products', icon: CakeIcon },
  { name: 'Labels', description: 'Water bottle labels', href: '/products', icon: TagIcon },
  { name: 'Chips Bags', description: 'Personalized digital chips bag designs you can print', href: '/products', icon: ShoppingBagIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavBarProps {
  setOpenBag: Dispatch<SetStateAction<boolean>>
}

export default function NavBar(props: NavBarProps) {
  const { user, cart, addCategoryFilter, categoryFilter } = useAppContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setOpenBag } = props;

  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Products
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link href="/categories" passHref={true}>
                    <span
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Blog
                    </span>
                  </Link>
                  <Link href="/products" passHref={true}>
                    <span
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      How to Buy
                    </span>
                  </Link>
                  <Link href="/contact" passHref={true}>
                    <span
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </span>
                  </Link>
                </div>
                <div className="py-6">
                  <Link href="/account" passHref={true}>
                    <span
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Sign in
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition.Root>
      {/* Final Mobile menu */}

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="border-b border-gray-200 mx-auto max-w-7xl px-6 sm:px-6 lg:px-24">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/" passHref={true}>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:ml-8">
                <Popover className="relative">
                  <Popover.Button ref={buttonRef} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                    Products
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            onClick={()=>{
                              buttonRef.current?.click()
                              addCategoryFilter(item.name)}
                            }
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                              <Link href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Link href="/categories" passHref={true}>
                  <span className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                    Blog
                  </span>
                </Link>
                <Link href="/products" passHref={true}>
                  <span className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                    How to Buy
                  </span>
                </Link>
                <Link href="/contact" passHref={true}>
                  <span className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                    Company
                  </span>
                </Link>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {
                  !user ? 
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <Link href="/account" passHref={true}>
                        <span className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                          Sign in
                        </span>
                      </Link>
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      <Link href="/account" passHref={true}>
                        <span className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                          Create account
                        </span>
                      </Link>
                    </div>
                    :
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                        { user.getUsername() }
                      </span>
                    </div>
                }

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://flagicons.lipis.dev/flags/1x1/us.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">USD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* WishList */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" onClick={()=> setOpenBag(true)} className="group relative flex items-center p-2">
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {
                      cart &&
                      cart.length > 0 && 
                      <span className="absolute top-0 right-0 px-1 rounded-full bg-indigo-600 text-white text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cart.length}
                      </span>
                    }
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" onClick={()=> setOpenBag(true)} className="group relative flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {
                      cart &&
                      cart.length > 0 && 
                      <span className="absolute top-0 right-0 px-1 rounded-full bg-indigo-600 text-white text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cart.length}
                      </span>
                    }
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
