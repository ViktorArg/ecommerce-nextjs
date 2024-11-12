interface CtaPanelProps {
  openingTitle?: string;
  mainTitle: string;
  subTitle: string;
  primaryButtonText: string;
  primaryButtonAction?: () => void;
  secundaryButtonText: string;
  secundaryButtonAction?: () => void;
  backgroundImageUrl?: string;
  rightImageUrl: string;
}

export default function CtaPanel(props: CtaPanelProps) {
  const { openingTitle, mainTitle, subTitle, primaryButtonText, secundaryButtonText, rightImageUrl } = props;
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2x1">
          <div className="relative isolate overflow-hidden bg-gray-900 h-56 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-12">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto w-2/5 text-center lg:mx-0 lg:flex-auto lg:text-left">
              <h1 className="w-3/5 text-xl font-bold tracking-tight text-white sm:text-xl">
                { mainTitle }
                {/* <br />
                { mainTitle } */}
              </h1>
              <p className="text-sm leading-8 text-gray-300">
                { subTitle }
              </p>
              <div className="flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  { primaryButtonText }
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  { secundaryButtonText } <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  