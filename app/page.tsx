"use client";

import { useState } from "react";
import { AuthService } from "@services/Authservice";
import { DataService } from "@services/DataService";
import CtaCarousel from "@components/CtaCarousel";
import CategoryCarousel from "@components/CategoryCarousel";
import CtaTwoPanels from "@components/CtaTwoPanels";
import CreateProduct from "@components/CreateProduct";
import Form from "@components/library/forms/Form";
import Advantages from "@components/Advantages";

const panels = [
  {
    mainTitle: "Boost your productivity. Start using our app today.",
    subTitle: "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
    primaryButtonText: "Shop Now",
    secundaryButtonText: "Go now",
    rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
  },
  {
    mainTitle: "Boost your productivity. Start using our app today 2.",
    subTitle: "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
    primaryButtonText: "Shop Now",
    secundaryButtonText: "Go now",
    rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
  },
]

const authService = new AuthService();
const dataService = new DataService(authService);

export default function Home() {
  const [userName, setUserName] = useState<string | undefined>(undefined);

  const data = 
    {
      name: 'Rugrats Twins Birthday Invitation',
      image: "https://s3.amazonaws.com/com.giftcard/Rainbow-High-Birthday-Video-Invitation-Animated.webp",
      category: "cards",
      price: 6.99,
      description: "Fantastic Pokemon Charizard Birthday Invitation with a free backside included. Personalized digital invite for your boy’s birthday party.",
      discount: 2,
    }
  return (
    <section className='w-full'>
      <CtaCarousel />
      <CategoryCarousel />
      <CtaTwoPanels />
      <Advantages />
    </section>
  )
}
