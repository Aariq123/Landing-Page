import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";


const Brand = () => {
    const { cartItems, addToCart, closeSidebarTwo, closeSubmenu } = useContext(AppContext)
    const { brand } = useParams()

    return ( 
       <div onClick={closeSidebarTwo} onPointerOver={closeSubmenu} >
        <h1>All Products from {brand}</h1>
            <div className="products-container">
                {cartItems.map(tech=> {
                if(tech.brand === brand){
                    return (
                        <div key={tech.id} className='product'>
                            <img src={tech.img} alt="" />
                            <p className="product-text">{tech.text}</p>
                            <div className="price-add">
                                <p className="price">{'$' + tech.price}</p>
                                <button className="add-to-cart" onClick={()=> addToCart(tech.id)}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    )
                }
            })}
            </div>
        </div>
    );
}
 
export default Brand;