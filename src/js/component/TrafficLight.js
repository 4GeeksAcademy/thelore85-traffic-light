import React, { useState } from 'react'

export default function TrafficLight() {

  const [selectedColor, setSelectedColor ] = useState(null)
  const glow = "0px 0px 30px orange"

  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center min-vh-100">

          <div className=" bg-black rounded" style={{ width: '150px', height: '340px', padding: '10px'}}>
            <div className="red bg-danger mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "red" ? glow : ''}`}} onClick={() => {setSelectedColor('red')}}></div>
            <div className="yello bg-warning mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "yello" ? glow : ''}`}} onClick={()=> {setSelectedColor('yello')}}></div>
            <div className="green bg-success mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "green" ? glow : ''}`}} onClick={()=> {setSelectedColor('green')}}></div>
          </div>

      </div>
    </div>
  )
}
