
import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import techs from "../data";
export const AppContext = createContext();


const initialState = {
    cart:[],
    cartItems:techs,
    initialSubmneuArray:[],
    submenuArray:[],
    total:0,
    openNav:false,
    searchArray:[]
}


 

const reducer = (state, action) => {
    if(action.type === 'addToCart'){
       state.cartItems.map(item=>{
            if(item.id === action.id){
                state.cart.push(item)
            }
        })

        return { ...state}
    }

    if(action.type === 'TOGGLE_AMOUNT'){
        let tempCart = state.cart.map(item=>{
            if(item.id === action.payload.serial){
                if(action.payload.toggle === 'inc'){
                    return { ...item, amount: item.amount + 1 }
                }
                if(action.payload.toggle === 'dec'){
                    return { ...item, amount:item.amount - 1 }
                }
            }
            return item
        }).filter(item=> item.amount !== 0)

        return {...state, cart:tempCart}
    }


    if(action.type === 'ADD_TOTALS'){
       let final = state.cart.reduce((total, item)=>{
            let itemTotal = item.price*item.amount
            return total + itemTotal
        },0)
        

        return { ...state, total:final}
    }

    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    
    if(action.type === 'REMOVE'){
        return {...state, cart:state.cart.filter(item=> item.id !== action.payload)}
    }

    if(action.type === 'OPEN_NAV'){
        return {...state, openNav: true}
    }

    if(action.type === 'CLOSE_NAV'){
        return {...state, openNav: false}
    }

    if(action.type === 'OPEN_SUBMENU'){
        let ligma = state.cartItems.filter(item=>
            item.catagory === action.payload)

       let sugma = ligma.map((item)=>{
        return item.brand
       })

       state.initialSubmneuArray = sugma.filter((item, i)=>{
        return sugma.indexOf(item) === i
    })
        return { ...state, submenuArray:state.initialSubmneuArray}
     }

     if(action.type === 'SEARCH'){
        let searchArray2 = state.cartItems.filter(item=>{
            if(item.catagory.indexOf(action.payload) != -1 ||
            item.brand.indexOf(action.payload) != -1
            ){
                return item
            }
           })
           console.log(searchArray2)
        return {...state, searchArray:searchArray2}
     }

}





export const AppProvider = ({children})=>{
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const [ submenuShow, setSubmenuShow ] = useState(false)
    const [ searchBar, setSearchBar ] = useState('')
    const [ userSearch, setUserSearch ] = useState(false)
    const [searchBarDrop, setSearchBarDrop ] = useState(false)

    const addToCart = (id) => {
        dispatch({type:'addToCart', id:id})
    }

    const toggleAmount = (toggle, serial) => {
        dispatch({type:'TOGGLE_AMOUNT', payload:{toggle, serial}})
    }

    const remove = (serial) => {
        dispatch({type:'REMOVE', payload:serial})
    }

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }


    const openSidebar = () => {
        dispatch({type:'OPEN_NAV'})
    }
    
    const closeSidebar = () => {
        dispatch({type:'CLOSE_NAV'})
    }

    const closeSidebarTwo = (e) => {
        if(state.openNav === true){
            if(!e.target.classList.contains('quick-links open')){
                closeSidebar()
            }
        }
    }

    const openSubmenu = (category) => {
        dispatch({type:'OPEN_SUBMENU', payload:category})
    }

    const closeSubmenu = () => {
        setSubmenuShow(false)
    }


    const searching = (term) => {
        setSearchBar(term)
        dispatch({type:'SEARCH', payload:term})
    }

    
   const searchDrop = (e) => {
        if(!e.target.classList.contains('search')){
            if(searchBarDrop == true){
                setSearchBarDrop(false)
            }
        }
}
   

    useEffect(()=>{
      dispatch({type:'ADD_TOTALS'})
    },[state.cart])

   

    return (
        <AppContext.Provider 
        value={{
        ...state, 
        addToCart, 
        toggleAmount, 
        remove, 
        clearCart, 
        closeSidebar, 
        openSidebar,
        closeSidebarTwo,
        openSubmenu,
        setSubmenuShow,
        closeSubmenu,
        submenuShow,
        searchBar,
        setSearchBar,
        searching,
        userSearch,
        setSearchBar,
        setSearchBarDrop,
        setUserSearch,
        searchDrop,
        searchBarDrop
        }}>
            {children}
        </AppContext.Provider>
    )
}

