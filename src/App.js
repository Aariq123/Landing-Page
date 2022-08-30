import React from "react";
import "./index.css"
import Footer from "./components/footer";

import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from "./components/products";
import Cart from "./components/cart";
import Hero from './components/hero'
import Reviews from "./components/reviews";
import { useContext } from "react";
import Brand from "./components/brand";
import { AppContext } from "./context/context";
import Search from "./components/search";
import Details from "./components/search";


function App() {
    const { userSearch } = useContext(AppContext)


    if(userSearch){
      return(
       <>
       <BrowserRouter>
        <Navbar></Navbar>
        <Search></Search>
        <Footer></Footer>
       </BrowserRouter>
      </>
      )
    }
    else{
      return (
        <BrowserRouter>
        <Navbar></Navbar>
                <Routes>
                      <Route path='/Landing-Page/' element={<Hero></Hero>} ></Route>
                      <Route path='/product/:category' element={<Products></Products>} ></Route>
                      <Route path='/brands/:brand' element={<Brand></Brand>} ></Route>
                      <Route path='/cart' element={<Cart></Cart>} ></Route>
                      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                      <Route path="/details/:id" element={<Details></Details>}></Route>
                </Routes>
          <Footer></Footer>
        </BrowserRouter>
      );
    }
}

export default App;
