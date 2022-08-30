import { useEffect } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";


const Search = () => {
    const { closeSubmenu, addToCart, searchArray, 
        searchDrop, closeSidebarTwo, searchBar
    } = useContext(AppContext)
    


    return ( 
       <div className="search-div" onPointerOver={closeSubmenu} onClick={searchDrop}>
        <div onClick={closeSidebarTwo}>
        <h1>Results for '{searchBar}'</h1>
        <div className="products-container">
        {
            searchArray.map(tech => {
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
            })
        }
        </div>
       </div>
       </div>
    );
}
 
export default Search