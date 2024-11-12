import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import CtaPanel from './CtaPanel';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {
  const { } = props;

  const [open, setOpen] = useState(false)

  const panels = [
    {
      mainTitle: "Boost your productivity. Start using our app today 1.",
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
    {
      mainTitle: "Boost your productivity. Start using our app today 3.",
      subTitle: "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
      primaryButtonText: "Shop Now",
      secundaryButtonText: "Go now",
      rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    },
    {
      mainTitle: "Boost your productivity. Start using our app today 4.",
      subTitle: "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
      primaryButtonText: "Shop Now",
      secundaryButtonText: "Go now",
      rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    },
  ]

  return (
    <div className="bg-white relative">
      {/* Mobile menu */}

      {/* Final Mobile menu */}
      <Carousel
        autoplay={true}
        className="rounded-xl overflow-x-hidden"
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-24 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-24 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {
        panels.map(panel =>{
          const { mainTitle, subTitle, primaryButtonText, secundaryButtonText, rightImageUrl } = panel;
          return (
            <div key={mainTitle}>
              <CtaPanel
                mainTitle={mainTitle}
                subTitle={subTitle}
                primaryButtonText={primaryButtonText}
                secundaryButtonText={secundaryButtonText}
                rightImageUrl={rightImageUrl}
              />
            </div>

          )
        })
      }
    </Carousel>
    </div>
  )
}
