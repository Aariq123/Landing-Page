import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";


const Products = () => {
    const { cartItems, addToCart, closeSidebarTwo, closeSubmenu, searchDrop } = useContext(AppContext)
    const { category } = useParams()

    return ( 
       <div onClick={searchDrop} onPointerOver={closeSubmenu} >
        <div onClick={closeSidebarTwo}>
        <h1>All {category+'s'}</h1>
            <div className="products-container">
                {cartItems.map(tech=> {
                if(tech.catagory === category){
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
        </div>
    );
}
 
export default Products;