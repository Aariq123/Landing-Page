import React from "react";
import "./index.css"
import Footer from "./components/footer";

import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./components/products";
import Cart from "./components/cart";
import Hero from './components/hero'
import Reviews from "./components/reviews";
import { useContext } from "react";
import Brand from "./components/brand";
import { AppContext } from "./context/context";
import Search from "./components/search";


function App() {
    const { userSearch } = useContext(AppContext)


    if(userSearch){
      return(
       <>
       <Router>
        <Navbar></Navbar>
        <Search></Search>
        <Footer></Footer>
       </Router>
      </>
      )
    }
    else{
      return (
        <Router>
        <Navbar></Navbar>
                <Routes>
                      <Route path='/home' element={<Hero></Hero>} ></Route>
                      <Route path='/product/:category' element={<Products></Products>} ></Route>
                      <Route path='/brands/:brand' element={<Brand></Brand>} ></Route>
                      <Route path='/cart' element={<Cart></Cart>} ></Route>
                      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                </Routes>
          <Footer></Footer>
        </Router>
      );
    }
}

export default App;
