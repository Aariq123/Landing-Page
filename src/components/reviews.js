import { useContext } from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/context';

const Reviews = () => {

    const { closeSubmenu, closeSidebarTwo, searchDrop } = useContext(AppContext)
    const [ title, setTitle ] = useState('')
    const [ product, setProduct ] = useState('')
    const [ des, setDes ] = useState('')
    const [ reviewArray, setReviewArray ] = useState([])
    const [ starRating, setStartRating ] = useState(false)
    const widthRef = useRef(null)
    const starArray = [1, 2, 3, 4, 5]
    const [ligma, setLigma] = useState(0)



    useEffect(()=>{
        const target =  widthRef.current.childNodes;

       target.forEach((item, i) => {
            item.addEventListener('click', ()=>{
                setLigma(i)
                target.forEach((star, index)=>{
                    if(index <= i){
                        star.style.color = 'gold'
                    }
                })
               
                setStartRating(true)
              
            })
       })
    }, [ligma])
    
   

    const sugma = () => {

    }
   

    const submit = (e) => {
        e.preventDefault()
        
        const review = {
            title,
            product,
            des,
            ligma,
            id:Math.random()*100
        }

        if(starRating === true){
            setReviewArray([...reviewArray, review])
            setTitle('')
            setProduct('')
            setDes('')
            setLigma(0)
            const target =  widthRef.current.childNodes;
            target.forEach(item=>{
                item.style.color = 'black'
            })
            setStartRating(false)
        }
    }


    return ( 
        <div className="review-container" onClick={closeSidebarTwo}
         onPointerOver={closeSubmenu} >
            <div onClick={searchDrop}>
            <h1>ADD A REVIEW</h1>
            <form className='form'>
                    <label htmlFor="a">Title:</label>
                    <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)} name='a' />

                <div className="star-div">
                    Rate the product:
                    <div className="stars" ref={widthRef} >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>

                    <label htmlFor="b">Product:</label>
                    <input type="text" required value={product} onChange={(e)=> setProduct(e.target.value)} name='b'/>

                    <label htmlFor="ligma">Description:</label>
                    <textarea value={des} onChange={(e)=> setDes(e.target.value)} className='text-area' name="ligma"></textarea>

                    <button onClick={submit} className='submit'>Submit</button>
            </form>

            <div className="reviews">

                <div className="review">
                    <div>
                        <img src={require('../images/ligma.jpg')}  alt="" />
                        <div>
                            <h1 className="review-title">Purai mal.....</h1>
                            <div className="rating">
                            {starArray.map((item, i)=>{
                                            return(
                                                <i className='fa-solid fa-star gold' key={i}></i>
                                            )
                                       })}
                            </div>
                            <div className="product-name">ligma</div>
                        </div>
                    </div>
                    <div>
                        <div className="review-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum similique doloribus at provident placeat incidunt repellat voluptatum sed perspiciatis id eveniet, vitae facere inventore tempora veniam officia. Optio, molestias. Quod!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div>
                        <img src='' alt="" />
                        <div>
                            <h1 className="review-title">Offended.....</h1>
                            <div className="rating">
                                <i className="fa-solid fa-star gold"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="product-name">ligma</div>
                        </div>
                    </div>
                    <div>
                        <div className="review-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum similique doloribus at provident placeat incidunt repellat voluptatum sed perspiciatis id eveniet, vitae facere inventore tempora veniam officia. Optio, molestias. Quod!
                            </p>
                        </div>
                    </div>
                </div>

                {reviewArray.map(item=>{
                    const {title, des, product, id, ligma} = item
                
              
                       return(
                            <div className="review" key={id}>
                            <div>
                                <div>
                                    <h1 className="review-title">{title}</h1>
                                    <div className="rating" >
                                       {starArray.map((item, i)=>{
                                            return(
                                                <i className={i<= ligma ?'fa-solid fa-star gold' :  'fa-solid fa-star'} key={i}></i>
                                            )
                                       })}
                                    </div>
                                    <div className="product-name">{product}</div>
                                </div>
                            </div>
                            <div>
                                <div className="review-text">
                                    <p>{des}
                                    </p>
                                </div>
                            </div>
                        </div>
                       )
                   
               
                })}

            </div>
        </div> 
        </div>
    );
}
 
export default Reviews;