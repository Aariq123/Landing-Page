import { useContext } from 'react';
import { AppContext } from '../context/context';


const Cart = () => {
    const { searchDrop, cart, total, toggleAmount, remove, clearCart, closeSubmenu, closeSidebarTwo } = useContext(AppContext) 
 
  
    return ( 
        <div className='cart-container' onClick={closeSidebarTwo} 
        onPointerOver={closeSubmenu}>
          <div onClick={searchDrop}>
          {cart.length == 0 && 
            <h1 className='no-items'>No items selected...</h1>}

            { cart.length > 0 &&
            cart.map(tech=> {
              return(
                    <div className='cart-item' key={tech.id}>
                        <div>
                            <img src={tech.img} alt="" />
                            <div>
                                <div>
                                    <p>{tech.catagory}</p>
                                    <p className='price'>{'$' +tech.price}</p>
                                    <button className='remove' onClick={()=>remove(tech.id)}>remove</button>
                                </div>
                            </div>
                        </div>
                        <div>
                                <i className="fa-solid fa-arrow-up" onClick={()=>{toggleAmount('inc', tech.id)}}></i>
                                <p>{tech.amount}</p>
                                <i className="fa-solid fa-arrow-down"onClick={()=>{toggleAmount('dec', tech.id)}} ></i>
                            </div>
                    </div>
                  )
              

            })}

          <div className='total'>
            <hr />
            <div className="total-container">
            <p>Total:</p>
            <p className='price'>{'$'+total}</p>
            </div>
          </div>
          <button className="clear-cart" onClick={clearCart}>CLEAR CART</button>
        </div>
        </div>
    );
}
 
export default Cart;