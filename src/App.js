import './App.css'
import React from 'react'
import { Main } from './component/main'
import Success from './component/success'
import AppContext from './context'
import { useState } from 'react'

function App () {
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    if (!error && value) setModal(prev => !prev)
  }
  const handleChange = e => {
    const { value } = e.target
    const match = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,7})$/.test(
      value
    )
    console.log(value, match)
    setValue(value)
    if (!match && value) setError(true)
    if (match && value) setError(false)
  }

  const contextValue = {
    error,
    value,
    setValue,
    setError,
    handleChange,
    toggleModal
  }
  return (
    <AppContext.Provider value={contextValue}>
      <main
        className='w-screen h-screen chocolateGrey flex items-center

'
      >
        {!modal && <Main />}
        {modal && <Success />}
      </main>
    </AppContext.Provider>
  )
}

export default App
