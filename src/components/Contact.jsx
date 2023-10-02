import React, { useState } from 'react'

const Contact = () => {
  const [firstVal, setfirstVal] = useState('')
  const [secondVal, setsecondVal] = useState('')
  const [answer, setanswer] = useState('')

  const addMe = () => {
    let a = Number(firstVal)
    let b = Number(secondVal)
    let c = a + b;
    setanswer(c)
  }

  const minus = () => {
    let a = Number(firstVal)
    let b = Number(secondVal)
    let c = a - b;
    setanswer(c)
  }

  const muti = () => {
    let a = Number(firstVal)
    let b = Number(secondVal)
    let c = a * b;
    setanswer(c)
  }


  const divid = () => {
    let a = Number(firstVal)
    let b = Number(secondVal)
    let c = a / b;
    setanswer(c)
  }

  const clearMe = () => {
    setfirstVal('')
    setsecondVal('')
    setanswer('')
  }




  return (
    <>
      <div className='mt-3' style={{ width: "30%",border:"3px solid grey",padding:'20px',borderRadius:"15px",backgroundColor:"green",margin:"auto" }} >
        <input placeholder='Enter First Number...' type="number" className='form-control' value={firstVal} onChange={(e) => setfirstVal(e.target.value)} />
        <input placeholder='Enter Second Number...' type="number" className='form-control mt-2' value={secondVal} onChange={(e) => setsecondVal(e.target.value)} />
        <button className='btn btn-warning mt-2 m-2' onClick={addMe}>+</button>
        <button className='btn btn-warning m-2' onClick={minus}>-</button>
        <button className='btn btn-warning m-2' onClick={muti}>*</button>
        <button className='btn btn-warning m-2' onClick={divid}>/</button>
        <button className='btn btn-danger m-2' onClick={clearMe}>Clear</button>
        <input placeholder='Result...' value={answer} type="text" className='form-control mt-2' readOnly />
      </div>


    </>
  )
}

export default Contact