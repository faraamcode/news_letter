import React, { useContext } from 'react'
import signup from '../assets/images/illustration-sign-up-desktop.svg'
import list from '../assets/images/icon-list.svg'
import AppContext from '../context'

export const Main = () => {
  const data = useContext(AppContext)
  const { error, value, handleChange, toggleModal } = data

  return (
    <div className='sm:w-full sm:h-screen md:p-8 main-container max bg-white rounded-3xl shadow-md mx-auto my-auto flex flex-col md:flex-row'>
      <div className='md:flex-1 p-4 md:p-0'>
        <h2 className='text-5xl my-9'>Stay Updated</h2>
        <p className='text-lg mb-10'>
          Join 60000+ product managers receiving monthly updates on
        </p>
        <div>
          <div className='flex gap-4 mb-4'>
            <img src={list} alt='success tick' />
            <p className='text-lg'>
              Product discovery and building what matters
            </p>
          </div>
          <div className='flex gap-4 mb-4'>
            <img src={list} alt='success' />
            <p className='text-lg'>Measuring to ensure updates are success</p>
          </div>
          <div className='flex gap-4 mb-4'>
            <img src={list} alt='success more' />
            <p className='text-lg'>And much more!</p>
          </div>
        </div>
        <div className='form mt-7'>
          <div className='flex justify-between'>
            <label for='email'>Email address</label>
            {error && (
              <label className='tomato-color error-msg'>
                Valid email required
              </label>
            )}
          </div>
          <input
            placeholder='email@company.com'
            type='email'
            value={value}
            onChange={handleChange}
            required
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
            className='w-full border-4 rounded-md p-3 mt-4 input'
          />
        </div>
        <button
          onClick={toggleModal}
          className='darkGrey button text-white text-lg p-5 rounded-lg w-full mt-4'
        >
          subscribe to monthly newsletter
        </button>
      </div>
      <img src={signup} className='md:flex-1' alt='sign up ' />
    </div>
  )
}
