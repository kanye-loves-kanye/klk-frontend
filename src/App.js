import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import KLKEdit from "./pages/KLKEdit";
import KLKNewItem from "./pages/KLKNewItem";
import MyCollection from "./pages/MyCollection";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TypeOfYe from "./pages/TypeOfYe";
import KLKNotFound from "./pages/KLKNotFound";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if(loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  },[])

  const signin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem("token", response.headers.get("Authorization"));
      return response.json();
    })
    .then((payload) => {
      if (payload) {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      }
    })
    .catch(error => console.log("Sign in errors: ", error));
  }
  
  const signup = (userInfo) => {
    fetch("http://localhost:3000/signup", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      localStorage.setItem("token", response.headers.get("Authorization"));
      return response.json();
    })
    .then((payload) => {
      if (payload) {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      }
    })
    .catch(error => console.log("Sign up errors: ", error));
  }
 
  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }

  return (
    <div className='App'>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/inspiration' element={<Inspiration />} />
        <Route path='/klkedit' element={<KLKEdit />} />
        <Route path='/klknewitem' element={<KLKNewItem />} />
        <Route path='/mycollection' element={<MyCollection />} />
        <Route path='/login' element={<SignIn signin={signin} />} />
        <Route path='/signup' element={<SignUp signup={signup} />} />
        <Route path='/typeofye' element={<TypeOfYe />} />
        <Route path='*' element={<KLKNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
