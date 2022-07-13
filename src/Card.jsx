import React,{useState} from 'react'

export default function Card() {

  const [number,setNumber]=useState(0);
  const [text,setText]=useState("");

  return (
    <div className='card'>

      <h1>{number}</h1>
      <div>
      <button className='btn btn-success w-50' onClick={()=>setNumber(number+1)}>+</button>
      <button className='btn btn-danger w-50' onClick={()=>setNumber(number-1)}>-</button>
      </div>

      <h3 className='mt-5'>{text}</h3>
      <input type="text" className='form-control w-75 mx-auto' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type here..." />

    </div>
  )
}
