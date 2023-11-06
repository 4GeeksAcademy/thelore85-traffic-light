import React, { useEffect, useState } from 'react'

export default function TrafficLight() {

  const [selectedColor, setSelectedColor ] = useState(null)
  const [showPurple, setShowPurple] = useState (false)
  const [animation, setAnimation] = useState (false)
  const glow = "0px 0px 30px orange"

  const handleShow = ()=>{ showPurple ? setShowPurple(false) : setShowPurple(true) }
  const handleAnimation = () => { animation ? setAnimation(false) : setAnimation(true)}
  const handleReset = ()=>{
    setAnimation(false)
    setSelectedColor(null)
    setShowPurple(false)
  }

  let time = 0;
  
  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        if (selectedColor === null) {
          setSelectedColor('green');
        } else if (selectedColor === 'green') {
          setSelectedColor('yello');
        } else if (selectedColor === 'yello') {
          setSelectedColor('red');
        } else if (selectedColor === 'red') {
          setSelectedColor('purple');
        } else {
          setSelectedColor('green');
        }
      }, 500);
  
      return () => {
        clearTimeout(timer); // Cambiato da clearInterval a clearTimeout
      };
    }
  }, [animation, selectedColor]);
  
  
  

  return (
    <div className="d-flex bg-dark justify-content-center align-items-center min-vh-100">
      <div className="">
          <div className=" bg-black m-auto" style={{width: '15px', height: '60px'}}></div>
          <div className=" bg-black rounded mx-auto mb-5" style={{ width: '150px', padding: '10px'}}>
            <div className="red bg-danger mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "red" ? glow : ''}`}} onClick={() => {setSelectedColor('red')}}></div>
            <div className="yello bg-warning mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "yello" ? glow : ''}`}} onClick={()=> {setSelectedColor('yello')}}></div>
            <div className="green bg-success mx-auto rounded-circle my-3" style={{ width: '85px', height: '85px', boxShadow: `${selectedColor === "green" ? glow : ''}`}} onClick={()=> {setSelectedColor('green')}}></div>
            
            {showPurple ? (<div className="purple mx-auto rounded-circle my-3" style={{ width: '85px', background:'purple', height: '85px', boxShadow: `${selectedColor === "purple" ? glow : ''}`}} onClick={()=> {setSelectedColor('purple')}}></div>) : null }
            
          </div>

          <div className="text-center">
            <button className="btn btn-primary me-3" onClick={handleShow}>Super Traffic Light</button>
            <button className="btn btn-light text-primary me-3" onClick={handleAnimation}>
              {animation ? "Stop Animation" : "Start Animation"}
            </button>
            <button className="btn btn-danger me-3" onClick={handleReset}>Reset</button>
          </div>
      </div>

    </div>
  )
}
