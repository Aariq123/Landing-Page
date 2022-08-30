
import { useContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context';

const Navbar = () => {

    const { cart, openSubmenu, openSidebar, openNav, 
        closeSidebar, closeSidebarTwo, submenuArray,
        setSubmenuShow, submenuShow, closeSubmenu,
        searching, searchBar, setUserSearch, searchDrop,
        searchBarDrop, setSearchBarDrop, closeSidebarThree
    } = useContext(AppContext)


   
   const [ displayWidth, setDisplayWidth ] = useState(null)
   const [ touchAvaliable, setTouchAvaliable ] = useState(null)
   const leftRef = useRef(null);
   const navRef = useRef(null)
   const actualLinksRef = useRef(null)
   const catagories = [ 'laptop', 'desktop', 'software', 'tablet', 'camera', 'monitor']
   
  
   useEffect(()=>{
        setDisplayWidth(navRef.current.clientWidth)
   },[navRef.current])
   
    const openHoverMenu = (e) => {
        let word = e.target.textContent
        if(displayWidth > 843 ){
            let position = e.target.offsetLeft;
            leftRef.current.style.left = `${position}px`
            leftRef.current.style.top = `${133}px`
        }
        if(displayWidth < 843 ){
            leftRef.current.style.left = `${actualLinksRef.current.clientWidth}px`
            let positionTop = e.target.offsetTop;
            leftRef.current.style.top = `${positionTop + 80}px`
        }
        
        openSubmenu(word)
        setSubmenuShow(true)
    }

    const openHoverMenuTouch = (e,name) => {
        leftRef.current.style.left = `${actualLinksRef.current.clientWidth}px`
        let positionTop = e.target.offsetTop;
        leftRef.current.style.top = `${positionTop + 80}px`
         openSubmenu(name)
        setSubmenuShow(true)
    }


    return ( 
        <nav ref={navRef}  onTouchStart={()=>setTouchAvaliable(true)}>
        <div onClick={searchDrop}>
        <div className="header" onPointerOver={closeSubmenu}>
            <div className="heading">
                <Link onClick={()=>setUserSearch(false)} to='/Landing-Page/'><img src={require('../images/tvector.jpg')} alt="" /></Link>
                    <div className='search-div'>
                        <form>
                            <input type="text" 
                            className={searchBarDrop ? 'search on' : 'search'} 
                            placeholder='Search' value={searchBar} 
                            onChange={(e)=>{
                                setUserSearch(true)
                                searching(e.target.value.toLowerCase())
                            }}
                            />
                            <i onClick={()=>{setSearchBarDrop(!searchBarDrop)}} className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
            </div>
            <div className={openNav ? 'quick-links sugma open' : 'quick-links sugma'} >
                <Link onClick={()=>setUserSearch(false)} to='/reviews'>Reviews</Link>
                <Link onClick={()=>setUserSearch(false)} to='/cart'>
                    <i className="fa-solid fa-bag-shopping">
                        <div className="show-num">{cart.length}</div> 
                    </i>
                </Link>
            </div>

            <i className={openNav ? 'fa-solid fa-bars' : 'fa-solid fa-bars open'} onClick={openSidebar}></i>
            <i className={openNav ? 'fa-solid fa-xmark open' : 'fa-solid fa-xmark'} onClick={closeSidebar}></i>
            </div>

            <div className={openNav ? 'actual-links sugma open' : 'actual-links sugma'} ref={actualLinksRef}>

          

                {!touchAvaliable &&
                    catagories.map((item, i)=>{
                        return (
                            <Link key={i} onClick={()=>setUserSearch(false)} className='link-list' 
                                onPointerOver={openHoverMenu}  to={`/product/${item}`}>
                                {item}
                            </Link>
                        )
                    })
                }

                {touchAvaliable &&
                    catagories.map((item, i)=>{
                        return (
                            <div key={i} className='link-list sugma' >
                                <Link onClick={()=>setUserSearch(false)}  to={`/product/${item}`}>
                                    {item}
                                </Link>
                                <div className='sugma'><i onClick={(e)=>openHoverMenuTouch(e,item)} className="fa-solid fa-caret-right"></i> </div>
                            </div>
                        )
                    })
                }   
            </div>

            <div className={submenuShow ? "submenu show" : 'submenu'} ref={leftRef}>
            <ul className='submenu-ul '>
                {submenuArray.map((item,i)=>{
                    return(
                        <li key={i}><Link onClick={()=>setUserSearch(false)} to={`/brands/${item}`} >{item}</Link></li>
                    )
                })}
             </ul>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;