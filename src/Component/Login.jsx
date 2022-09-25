
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  Joi  from 'joi';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';





export default function Login(x) {
  const [error, setError] = useState('')
  const [errorList, setErrorList] = useState([])
  const [isLoding , setIsLoding] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      navigat("/Home")
    }
  },[]);
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
    
    let {data} = await axios.post(`https://routeegypt.herokuapp.com/signin` , user)
    if(data.message === "success"){
      navigat('/Home') 
      localStorage.setItem('userToken' , data.token)
      x.saveUserData()
       setIsLoding(false)
    }else{ 
      setError(data.message)
      setIsLoding(false)
    }
  }
}



  

  function validation() {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <div className="w-75 h-100 mx-auto mt-4">
        <h2>login</h2>
        {error ? <div className="alert bg-danger" >{error}</div>:'' }
        <form onSubmit={SubmitForm}>
          <div className="mb-2">
            <label className="fs-5" htmlFor="email">
              email
            </label>
            <input onChange={getUserData} type="email" name="email" />
          </div>
          {errorList.map((error , i)=> error.path == "email"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")   }
         
          <div className="mb-2">
            <label className="fs-5" htmlFor="password">
              password
            </label>
            <input onChange={getUserData} type="password" name="password" />
          </div>
          {errorList.map((error , i)=> error.path == "password"?<div key={i} className="alert bg-danger" >{error.message}</div>:"")}
          
          <div>
          <button type="supmit" className="btn btn-info">
          {isLoding === true ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login'}
          </button> 
          
          </div>
        </form>
      </div>
    </>
  );
}