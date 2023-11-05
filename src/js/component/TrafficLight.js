import React, { useState } from 'react'

export default function TrafficLight() {

  const [glow, setGlow ] = useState(null)

  const style = {width: '85px', height: '85px', boxShadow: "0px 0px 30px orange"}


  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center min-vh-100">

          <div className=" bg-black rounded" style={{ width: '150px', height: '340px', padding: '10px'}}>
            <div className="red bg-danger mx-auto rounded-circle my-3" style={glow === "red" ? style : { width: '85px', height: '85px'}} onClick={()=> {setGlow('red')}}></div>
            <div className="yello bg-warning mx-auto rounded-circle my-3" style={glow === "yello" ? style : { width: '85px', height: '85px'}} onClick={()=> {setGlow('yello')}}></div>
            <div className="green bg-success mx-auto rounded-circle my-3" style={glow === "green" ? style : { width: '85px', height: '85px'}} onClick={()=> {setGlow('green')}}></div>
          </div>

      </div>
    </div>
  )
}
