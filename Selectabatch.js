import React from 'react'
import './Selectabranch.css'
function Selectabatch() {
  return (
    <div className= "body">
     <div className='select' >
      <h5 className='mb-2' >Select a Branch</h5>
      <div className="container">
      <button className="btn mt-3 mb-1 btn-success" style={{"width":"100px"}} >2022</button>
      <button className="btn m-1 btn-success" style={{"width":"100px"}} >2023</button>
      <button className="btn m-1 btn-success" style={{"width":"100px"}} >2024</button>
      <button className="btn m-1 btn-success"style={{"width":"100px"}} >2025</button>
      </div>
     </div>
    </div>
  )
}

export default Selectabatch
