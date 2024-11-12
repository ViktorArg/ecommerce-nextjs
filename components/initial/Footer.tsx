import Link from 'next/link'
import Image from 'next/image'
import Logo from '@utils/Logo';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="spikes"></div>
      <div className='footer'>
          <div className='flex flex-row '>
            <div>
              <Link href="/">
                <Logo height={200} width={300}/>
              </Link>
            </div>

            <div className='flex-col'>
              <Link href=""><p className='footer_titles_text'>About</p></Link>
              <Link href="/contact" passHref={true}><p className='footer_titles_text'>Contact</p></Link>
              <Link href="/products" passHref={true}><p className='footer_titles_text'>Term of Service</p></Link>
              <Link href="/contact"><p className='footer_titles_text'>FAQ</p></Link>
            </div>

            <div className=''>
              {/* <button href="#" circular color="facebook" icon="facebook" />
              <button href="#" circular color="twitter" icon="twitter" />
              <button href="#" circular color="linkedin" icon="linkedin" />
              <button href="#" circular color="youtube" icon="youtube" /> */}
            </div>
          </div>

          <div className='mt-4 p-2 border-t-solid border-t-2 border-primary-teal'>
            <span>Copyright © 2023 Gaming - All rights reserved</span>
          </div>
      </div>
    </footer>
  )
}

export default Footer