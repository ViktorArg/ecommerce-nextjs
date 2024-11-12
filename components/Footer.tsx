import { useAppContext } from '@context/AppContext';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const categories = [
  { name: 'Invitations', description: 'Get cards or video invitations' },
  { name: 'Shirts', description: 'Get your shirt in any color'},
  { name: 'Toppers', description: 'Cake and cupcakes toppers' },
  { name: 'Labels', description: 'Water bottle labels' },
  { name: 'Chips Bags', description: 'Personalized digital chips bag designs you can print' },
]

export default function Footer() {
  const { addCategoryFilter } = useAppContext();
  return (
    <div className="flex flex-col mx-auto relative isolate overflow-hidden bg-gray-900 py-8 lg:pt-16">
      <div className="max-w-7xl">
        <div className="flex flex-row justify-between max-w-2xl lg:max-w-none">
          {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4 lg:pt-2"> */}
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Products</dt>
              {categories.map((item) => (
                <Link href={"/products"} key={item.name} onClick={()=>addCategoryFilter(item.name)}>
                  <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                    {item.name}
                  </dd>
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Get to Know Us</dt>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Who we are
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Terms & Conditions
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Privacy
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Blog
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Customer Service</dt>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Contact
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Shipping
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Returns
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Secure Payments
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                FAQ
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Connect</dt>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Instagram
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Twitter
              </dd>
              <dd className="mt-2 cursor-pointer leading-7 text-gray-400 hover:text-indigo-600">
                Facebook
              </dd>
            </div>
          {/* </dl> */}
        </div>
      </div>
      <div className="h-6 mt-16 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
        <div className="w-6 flex flex-col items-start text-gray-400 hover:text-indigo-600 cursor-pointer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
        </div>
        <div className="w-6 flex flex-col items-start text-gray-400 hover:text-indigo-600 cursor-pointer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
        </div>
        <div className="w-6 flex flex-col items-start text-gray-400 hover:text-indigo-600 cursor-pointer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
        </div>
        <div className="w-6 flex flex-col items-start text-gray-400 hover:text-indigo-600 cursor-pointer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path></svg>
        </div>
      </div>

      <div className="flex justify-center border-t border-gray-200 mt-8 pt-4">	
        <p className="text-sm text-gray-500">© 2023 Your Company, Inc. All rights reserved.</p>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
