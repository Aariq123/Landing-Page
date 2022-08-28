import { Link } from 'react-router-dom'
import techs from '../data'
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/context';



const Hero = () => {
    const [ count, setCount ] = useState(0)
    const { cartItems, addToCart, closeSidebarTwo, closeSubmenu, searchDrop } = useContext(AppContext)

    const clickDisplay = (num) => {
        setCount(num)
    }


    useEffect(()=>{
        if(count > techs.length - 2){
            setCount(0)
        }
    },[count])
   


    useEffect(()=>{
        let slider = setInterval(() => {
            setCount(count + 1)
          }, 2500);
          return () => {
            clearInterval(slider); 
          }; 
    },[count])

    let currentTech = cartItems[count];


    return ( 
            <div className='hero' onClick={closeSidebarTwo} 
            onMouseOver={closeSubmenu}>
                <div onClick={searchDrop}>
                <h3>Our latest Products</h3>
                <div className='display-container'>
                    <img className='hero-img' src={currentTech.img} alt="" />
                    <div>
                        <h4 className='category'>{currentTech.brand}</h4>
                        <p className='text'>{currentTech.text}</p>
                        <button className="add" onClick={()=>addToCart(currentTech.id)}>
                            <i className="fa-solid fa-cart-arrow-down" ></i>
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="display-nav-container">
                    {cartItems.map((tech,i)=>(
                        <div onClick={()=> clickDisplay(i)} className={i === count ? 'display-nav on' : 'display-nav'} key={tech.id}></div>
                    ))}
                </div>
            </div>
            </div>
     );
}
 
export default Hero;