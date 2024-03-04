import React, { useState } from "react";
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
  const [userInput, setUserInput] = useState("");
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <div className='App'>
      <h1></h1>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/inspiration' element={<Inspiration />} />
        <Route path='/klk-edit' element={<KLKEdit />} />
        <Route path='/klk-new-item' element={<KLKNewItem />} />
        <Route path='/my-collection' element={<MyCollection />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/type-of-ye' element={<TypeOfYe />} />
        <Route path='*' element={<KLKNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

<></>;
