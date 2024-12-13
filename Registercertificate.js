import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Log.css'
function Registercertificate() {
  const [credentials,setCredentials] = useState({email:"",password:""});
  const onChange =(event)=>{
    setCredentials({...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className="body my-3">
      <form>
      <div className="mb-3 d-flex">
          <label htmlFor="exampleInputRno" className="form-label">
            Roll No
          </label>
          <input
            type="text"
            name="Rno"
            onChange={onChange}
            value={credentials.rno}
            className="form-control"
            id="exampleInputRno"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            onChange={onChange}
            value={credentials.name}
            className="form-control"
            id="exampleInputName"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
        <div>
        <Link className="m-3" to="/login">Already have an account?</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Registercertificate
