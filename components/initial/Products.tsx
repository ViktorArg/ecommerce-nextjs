"use client";

import { Pagination as PaginationSU } from '@nextui-org/react';
import ProductCard from './ProductCard'

export const data = [
  {
    name: 'Rugrats Twins Birthday Invitation',
    category: 'cards',
    image: "./Rugrats-Twins-Birthday-Invitation.webp",
    price: 6.99,
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin’s birthday party.",
    discount: 2,
  },
  {
    name: 'Spiderman Miles Morales Birthday Invitation',
    category: 'cards',
    image: "https://s3.amazonaws.com/com.giftcard/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
    price: 7.99,
    description: "Awesome Spiderman Miles Morales Birthday Invitation with a free backside included. Personalized invite that you can send digital or print for your boy's birthday party. Order now!",
    discount: 2,
  },
  {
    name: 'Rugrats Twins Birthday Invitation',
    category: 'cards',
    image: "https://s3.amazonaws.com/com.giftcard/Rugrats-Twins-Birthday-Invitation.webp",
    price: 6.99,
    description: "Lovely Rugrats Twins Birthday Invitation with a free backside included. Personalized digital invite for your twin's birthday party.",
    discount: 2,
  },
  {
    name: 'Pokemon Charizard Birthday Invitation',
    category: 'invitation',
    image: "https://s3.amazonaws.com/com.giftcard/Stranger-Things-Birthday-Party-Invitation.webp",
    price: 8.99,
    description: "Fantastic Pokemon Charizard Birthday Invitation with a free backside included. Personalized digital invite for your boy’s birthday party.",
    discount: 2,
  },
];

const Products = () => {
  return (
    <div className='sectionGrid'>
      <h4 className='head_text text-center mb-8'>
        Latest Birthday Invitations and Party Supplies
      </h4>
      <div className='grid grid-cols-4 gap-4'>
        { data.map((item) => (
          <ProductCard name={item.name} category={item.category} image={item.image} price={item.price} description={item.description} discount={item.discount} key={item.name}/>
          )
        )}
      </div>
      <div className='grid justify-items-center mt-8'>
        <PaginationSU color="success" total={20} initialPage={1} />
      </div>
    </div>
  )
}

export default Products