import React from "react";
import { useState } from "react";
import Joi from "joi";
import { useEffect } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Login from './Login';

export default function Register() {
  const [error, setError] = useState('')
  const [errorList, setErrorList] = useState([])
  const [isLoding , setIsLoding] = useState(false)
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  
  let navigat = useNavigate();


async function SubmitForm(e) {
  e.preventDefault();
  setIsLoding(true)
  let resultValidation = validation();

  
  if(resultValidation.error ){
    setErrorList(resultValidation.error.details)
    setIsLoding(false)
  }else{
    
    let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup` , user)
    if(data.message === "success"){
       navigat('/Login') 
       setIsLoding(false)
    }else{ 
      setError(data.message)
      setIsLoding(false)
    }
  }
}
console.log(errorList)

  

  function validation() {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(30).required(),
      last_name: Joi.string().alphanum().min(3).max(30).required(),
      age: Joi.number().min(18).max(80).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[A-Z][a-z]{3,10}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <div className="w-75  mx-auto mt-4">
        <h2>Register</h2>
          
        <form onSubmit={SubmitForm}>
          <div className="mb-2">
            <label className="fs-5" htmlFor="first_name">
              First Name
            </label>
            <input onChange={getUserData} type="text" name="first_name" />
          </div>
          {errorList.map((error , i)=> error.path == "first_name"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
          <div className="mb-2">
            <label className="fs-5" htmlFor="last_name">
              last Name
            </label>
            <input onChange={getUserData} type="text" name="last_name" />
          </div>
          {errorList.map((error , i)=> error.path == "last_name"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
          <div className="mb-2">
            <label className="fs-5" htmlFor="age">
              Age
            </label>
            <input onChange={getUserData} type="number" name="age" />
          </div>
          {errorList.map((error , i)=> error.path == "age"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
          <div className="mb-2">
            <label className="fs-5" htmlFor="email">
              email
            </label>
            <input onChange={getUserData} type="email" name="email" />
          </div>
          {errorList.map((error , i)=> error.path == "email"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
          {error ? <div className="alert bg-danger" >{error}</div>:'' }
          <div className="mb-2">
            <label className="fs-5" htmlFor="password">
              password
            </label>
            <input onChange={getUserData} type="password" name="password" />
          </div>
          {errorList.map((error , i)=> error.path == "password"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
          <button type="supmit" className="btn btn-info">
          {isLoding === true ? <i class="fa-solid fa-spinner fa-spin"></i> : 'Register'}
          </button> 
        </form>
      </div>
    </>
  );
}
