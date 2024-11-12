
import Link from 'next/link'

const Login = () => {
  return (
    <div className='w-1/3 px-8 mb-20'>
      <h1 className='title mb-8'>
        My account
      </h1>
      <div className='flex flex-row gap-8'>
        <div>
          <h4 className='subtitle mb-8'>
            Login
          </h4>
          <div className='rounded flex flex-col border border-primary-teal p-6 gap-4'>
            <input className='border border-primary-teal p-2 rounded' placeholder='Username or Email' />
            <input className='border border-primary-teal p-2 rounded' placeholder='Password' />
            <p>Remember me</p>
            <button
              type='button'
              className='btn_primary'
            >
              SIGN IN
            </button>
            <Link href="/">
              <p className='text-primary-teal hover:text-secundary-teal'>Lost your password?</p>
            </Link>
          </div>
        </div>
        <div>
          <h4 className='subtitle mb-8'>
            Register
          </h4>
          <div className='rounded flex flex-col border border-primary-teal p-6 gap-4'>
            <input className='border border-primary-teal p-2 rounded' placeholder='Email' />
            <p>A link to set a new password will be sent to your email address.</p>
            <button
              type='button'
              className='btn_primary'
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login