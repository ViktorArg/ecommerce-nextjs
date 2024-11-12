import { Fragment, useEffect, useState } from 'react'
import { Combobox, Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import ProductList from './ProductList'
import { DataService } from '../services/DataService';
import { AuthService } from "@services/Authservice";
import { useAppContext } from '../context/AppContext'
import { ProductEntry } from '../models/model'
import Link from "next/link";
import { type CognitoUser } from '@aws-amplify/auth'
// import { Pagination } from '@nextui-org/react'

type MarketplaceProps = {
  dataService: DataService;
};

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Invitations', href: '#' },
  { name: 'Video Invitations', href: '#' },
  { name: 'Shirts', href: '#' },
  { name: 'Cake Toppers', href: '#' },
  { name: 'Labels', href: '#' },
  { name: 'Chips Bags', href: '#' },
  { name: 'Backdrops', href: '#' },
  { name: 'All', href: '#' },
]
const oldFilters = [
  {
    id: 'color',
    name: 'Theme',
    options: [
      { value: 'white', label: 'Halloween', checked: true },
      { value: 'beige', label: 'Christmas', checked: false },
      { value: 'blue', label: 'Pool Party', checked: false },
      { value: 'brown', label: 'St. Valentine Day', checked: false },
      { value: 'brown', label: 'Thank You', checked: false },
    ],
  },
  {
    id: 'gender',
    name: 'Gender',
    options: [
      { value: 'new-arrivals', label: 'Girls', checked: false },
      { value: 'sale', label: 'Boys', checked: false },
      { value: 'travel', label: 'Binary', checked: true },
    ],
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    options: [
      { value: '2l', label: 'Mario Bros', checked: false },
      { value: '6l', label: 'Pokemon', checked: false },
      { value: '12l', label: 'Fortnite', checked: false },
      { value: '18l', label: 'Sonic', checked: false },
      { value: '20l', label: 'Paw Patrol', checked: false },
      { value: '40l', label: 'Little Mermaid', checked: true },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Marketplace(props: MarketplaceProps) {
  const { user, products, addProducts, categoryFilter, addCategoryFilter } = useAppContext();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [productsData, setProductsData] = useState<ProductEntry[] | undefined>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [categoryFilterName, setCategoryFilterName] = useState('All');
  const [sort, setSort] = useState('Featured');
  const [selected, setSelected] = useState(products[0])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getProducts = async () => {
      if (user !== null) {
        // const products = await dataService.getProducts(user);
        const products: any = await fetch('./data.json', { method: 'GET' })
        addProducts(products);
      }
      const products: any = await fetch('./products.json', { method: 'GET' })
      const response = await products.json();
      addProducts(response.data);
      setProductsData(response.data);
    }
    if (products.length === 0) {
      getProducts();
    }
    if (!productsData || (productsData && productsData.length === 0)) {
      setProductsData(products);
    }
  }, [])

  useEffect(() => {
    if (categoryFilterName !== categoryFilter && productsData && productsData.length > 0) {      
      setCategoryFilterName(categoryFilter);
      filterProductsByCategory(categoryFilter);
    };
  }, [categoryFilterName, filters, sort, productsData, categoryFilter])

  const filterProductsByCategory = (filterType: string) => {
    setCategoryFilterName(filterType);
    if (categoryFilter !== filterType) {
      addCategoryFilter(filterType);
    }
    if (filterType === "All" || filterType === categoryFilterName) {
      setCategoryFilterName("All");
      addCategoryFilter("All");
      setFilters([]);
      setProductsData(products);
      return
    }
    let newFilters: string[] = [];
    if (filters.includes(filterType)) {
      newFilters = filters.filter(filter => filter !== filterType)
    } else {
      newFilters.push(filterType);
      newFilters.concat(filters);
    }
    setFilters(newFilters);
    let filteredProducts = products.filter(product => newFilters.includes(product.category))
    setProductsData(filteredProducts);
  }

  const filterProductsByName = (productName: string) => {
    let filteredProducts = products?.filter(product => product.name === productName);
    setProductsData(filteredProducts);
    setCategoryFilterName("All");
    addCategoryFilter("All");
  }

  const sortProducts = (sortType: string) => {
    let sortedProducts;
    switch (sortType) {
      case "Price: Low to High": {
        sortedProducts = products?.sort((a, b) => a.price - b.price);
        break;
      }
      case "Price: High to Low": {
        sortedProducts = products?.sort((a, b) => b.price - a.price);
        break;
      }
      case "Name: A to Z": {
        sortedProducts = products?.sort((a, b) => (a.name < b.name) ? -1 : 1);
        break;
      }
      case "Name: Z to A": {
        sortedProducts = products?.sort((a, b) => (a.name > b.name) ? -1 : 1);
        break;
      }
      default: {
        setProductsData(products);
      }
    }
    setProductsData(sortedProducts);
    setSort(sortType);
  }
  const filteredProducts =
    query === ''
      ? products
      : products?.filter((product) =>
        product.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
  return (
    <div className="bg-white rounded-md max-w-7xl mx-auto">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a onClick={() => filterProductsByCategory(category.name)} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {oldFilters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex max-w-2xl items-center space-x-2">
              <li key={"home"}>
                <div className="flex items-center">
                  <Link href="/" passHref={true}>
                    <span className="mr-2 text-sm font-medium text-gray-900">
                      Home
                    </span>
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li key={"products"}>
                <div className="flex items-center ">
                  <a onClick={() => filterProductsByCategory('All')}>
                    <span className="mr-2 text-sm font-medium text-gray-900 cursor-pointer">
                      Products
                    </span>
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {categoryFilterName}
                </a>
              </li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 mt-2 pb-6 lg:grid-cols-4 items-baseline border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Categories</h1>
            <div className="flex items-baseline">
              <h3 className="mr-2 text-base hover:text-indigo-600">
                <span>
                  {productsData?.length}
                </span>
              </h3>
              <h3 className="text-base text-gray-600">
                <span>
                  Products found
                </span>
              </h3>
            </div>

            <div className="lg:col-span-2 flex justify-end items-baseline">
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mr-8">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      // displayValue={(person) => person.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredProducts?.length === 0 && query !== '' ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredProducts?.map((product) => (
                          <Combobox.Option
                            key={product.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                              }`
                            }
                            onClick={() => filterProductsByName(product.name)}
                            value={product}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                    }`}
                                >
                                  {product.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                      }`}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
              <div className="">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort by: {sort}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item key={"Most Popular"}>
                          <a
                            onClick={() => sortProducts("Price: Low to High")}
                            className={classNames(
                              sort === "Price: Low to High" ? 'font-medium text-gray-900' : 'text-gray-500',
                              sort === "Price: Low to High" ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm cursor-pointer'
                            )}
                          >
                            Price: Low to High
                          </a>
                        </Menu.Item>
                        <Menu.Item key={"Price: Low to High"}>
                          <a
                            onClick={() => sortProducts("Price: High to Low")}
                            className={classNames(
                              sort === "Price: High to Low" ? 'font-medium text-gray-900' : 'text-gray-500',
                              sort === "Price: High to Low" ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm cursor-pointer'
                            )}
                          >
                            Price: High to Low
                          </a>
                        </Menu.Item>
                        <Menu.Item key={"Name: A to Z"}>
                          <a
                            onClick={() => sortProducts("Name: A to Z")}
                            className={classNames(
                              sort === "Name: A to Z" ? 'font-medium text-gray-900' : 'text-gray-500',
                              sort === "Name: A to Z" ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm cursor-pointer'
                            )}
                          >
                            Name: A to Z
                          </a>
                        </Menu.Item>
                        <Menu.Item key={"Name: Z to A"}>
                          <a
                            onClick={() => sortProducts("Name: Z to A")}
                            className={classNames(
                              sort === "Name: Z to A" ? 'font-medium text-gray-900' : 'text-gray-500',
                              sort === "Name: Z to A" ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm cursor-pointer'
                            )}
                          >
                            Name: Z to A
                          </a>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name} className={classNames("cursor-pointer p-2 rounded-md hover:text-indigo-600", categoryFilterName === category.name ? 'bg-gray-100 text-indigo-600' : '')}>
                      <a onClick={() => filterProductsByCategory(category.name)}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {oldFilters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">Trending Birthday Invitations and Party Supplies</h2>
                <ProductList products={productsData} />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              {/* <Pagination total={productsData ? Math.ceil(productsData?.length/9) : 1} initialPage={1} color={'secondary'} /> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
