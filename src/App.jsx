import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Component/Navebar";
import { Navigate, Route, Routes ,useNavigate } from "react-router-dom";
import Home from "./Component/Home";
import Movies from "./Component/Movies";
import MovieDetaiels from "./Component/MovieDetaiels";
import Tv from "./Component/Tv";

import About from "./Component/About";
import Network from "./Component/Network";
import Login from "./Component/Login";
import Notfound from "./Component/Notfound";
import Register from "./Component/Register";
import { useState , useEffect } from "react";
import jwtDecode from "jwt-decode";
import Footer from './Component/Footer';



function App() {
  let navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let enDecodeToken = localStorage.getItem("userToken");
    let decodeToken = jwtDecode(enDecodeToken);
    setUserData(decodeToken);
  }
useEffect(()=>{
  if(localStorage.getItem('userToken')){
    saveUserData()
  }
},[])

function logOut(){
  setUserData(null)
  localStorage.removeItem('userToken')
  navigate('/Login')
}


function ProtectedRoute(props) {
  if(localStorage.getItem('userToken') === null  ){
    return <Navigate to='/Login' />
  }
  else{
    return props.children
  }
}


  return (
    <div>
      <Navebar logOut={logOut} userData={userData} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<ProtectedRoute> <Home /></ProtectedRoute>  } />
          <Route path="MovieDetaiels" element={<ProtectedRoute><MovieDetaiels /></ProtectedRoute> }>
            <Route path=":id" element={<MovieDetaiels />} />
          </Route>
          <Route path="Movies" element={ <ProtectedRoute><Movies /></ProtectedRoute> } />
          <Route path="TvShow" element={<ProtectedRoute><Tv /></ProtectedRoute>  } />
          <Route path="About" element={<ProtectedRoute><About /></ProtectedRoute> } />
          <Route path="Network" element={<ProtectedRoute><Network /></ProtectedRoute>   } />
          <Route path="Login" element={<Login saveUserData={saveUserData} /> } />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
