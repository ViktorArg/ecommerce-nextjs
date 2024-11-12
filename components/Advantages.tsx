import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ArrowPathIcon,
  VideoCameraIcon,
  CakeIcon,
  TagIcon,
  ClockIcon,
  GiftIcon,
  ArchiveBoxIcon,
  ArchiveBoxArrowDownIcon,
  ArrowDownCircleIcon,
  ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline'

const stats = [
    { id: 1, name: 'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.', value: '10 minute grocery now', icon: ClockIcon },
    { id: 2, name: 'Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.', value: 'Best Prices & Offers', icon: GiftIcon },
    { id: 3, name: 'Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.', value: 'Wide Assortment', icon: ArchiveBoxIcon },
    { id: 3, name: 'Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.', value: 'Easy Returns', icon: ArrowPathIcon },
  ]
  
  export default function Advantages() {
    return (
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-8 lg:px-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <stat.icon className="h-10 w-10 flex-none text-gray-400" aria-hidden="true" />
                <dd className="text-xl text-left font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="text-left text-base leading-7 text-gray-600">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  