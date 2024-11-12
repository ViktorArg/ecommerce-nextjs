
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='w-1/2 px-8 mb-20'>
      <h1 className='title mb-8'>
        Contact us
      </h1>
      <div className='rounded flex flex-col border border-primary-teal p-6 gap-4'>
        <div className='flex flex-row gap-8'>
          <input className='border border-primary-teal p-2 rounded' placeholder='Firstname' />
          <input className='border border-primary-teal p-2 rounded' placeholder='Lastname' />
        </div>
        <input className='border border-primary-teal p-2 rounded' placeholder='Email' />
        <input className='border border-primary-teal p-2 rounded' placeholder='Subject' />
        <textarea className='border border-primary-teal p-2 rounded' placeholder='Comment or Message' />
        <p>I consent to having this website store my submitted information so they can respond to my inquiry.</p>
        <p>See our privacy policy to learn more about how we use data.</p>
        <button
              type='button'
              className='btn_primary'
            >
              SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Contact