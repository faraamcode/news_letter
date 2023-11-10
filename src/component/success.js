import React, { useContext } from 'react'
import successLogo from '../assets/images/icon-success.svg'
import AppContext from '../context'

export default function Success () {
  const data = useContext(AppContext)
  return (
    <div className='sm:w-full sm:h-screen md:p-10 max-w-xl max-success bg-white rounded-3xl shadow-md mx-auto my-auto'>
      <img src={successLogo} alt='gahs' className='mb-8' />
      <h1 className='text-6xl mb-8'> Thank you for subscribing</h1>
      <p className='text-lg mb-8'>
        a confirmation mail has been sent to {data.value || 'abdul@gmail.com'}{' '}
        open it and click the button inside to confirm your subscription
      </p>
      <button
        onClick={data?.toggleModal}
        className='darkGrey button text-white text-lg p-5 rounded-lg w-full mt-4'
      >
        Dismiss message
      </button>
    </div>
  )
}
