import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import CtaPanel from './CtaPanel';
import CtaPanelSmall from './CtaPanelSmall';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavBarProps {
}

export default function CtaTwoPanels(props: NavBarProps) {
  const { } = props;

  const [open, setOpen] = useState(false)

  const panels = [
    {
      mainTitle: "Boost your productivity. Start using our app today.",
      subTitle: "This year, our new summer collection.",
      primaryButtonText: "Shop Now",
      secundaryButtonText: "Go now",
      rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    },
    {
      mainTitle: "Boost your productivity. Start using our app today.",
      subTitle: "This year, our new summer collection.",
      primaryButtonText: "Shop Now",
      secundaryButtonText: "Go now",
      rightImageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    },
  ]

  return (
    <div className="bg-white flex my-16 px-24 gap-8">
      {
        panels.map(panel =>{
          const { mainTitle, subTitle, primaryButtonText, secundaryButtonText, rightImageUrl } = panel;
          return (
            <div key={mainTitle}>
              <CtaPanelSmall
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
    </div>
  )
}
