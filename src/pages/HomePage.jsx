import React, { useRef } from 'react'

const HomePage = () => {

  const inputTrainer = useRef()

const handleSubmit = (e)=> {
    e.preventDefault()
    dispatchEvent()
  }
  
  return(
    <>
    <h1>Trainer, if you want to find your favorite pokemon,please give me your trainer name</h1>
    <form on onSubmit={handleSubmit} action="">
      <input ref={inputTrainer} type="text" />
      <label htmlFor="">Catch them all</label>
    </form>
    </>
  )
}
export default HomePage