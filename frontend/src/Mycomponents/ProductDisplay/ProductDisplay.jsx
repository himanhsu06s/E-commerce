import React, {useContext, useEffect, useState,useRef} from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const{product} = props;

    const {addtoCart} = useContext(ShopContext);

    const[selectedsize, setSetetedsize] = useState(null);

    const[isButtonDisable,setIsButtonDisable] = useState(true);

    useEffect(
        () =>{
            setIsButtonDisable(selectedsize === null);
        },[selectedsize]);

        const handleSizeSelection = (size) => {
            setSetetedsize(size);
        };
    
        const handleAddToCart = () => {
            if (selectedsize) {
                addtoCart(product.id);
            }
        };

        const sizeRef = useRef(null);
        useEffect(
            ()=>{
                const handleOutsideClick =(event)=>{
                if(sizeRef.current && !sizeRef.current.contains(event.target)&&!event.target.classList.contains('add-to-cart-button'))
                {
                    setSetetedsize(null);
                }
            };
            document.body.addEventListener('click',handleOutsideClick);
            return ()=>{
                document.body.removeEventListener('click',handleOutsideClick)
            };
            },[]
        )

return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-image-list">
                <img src={product.image} alt="product_image" />
                <img src={product.image} alt="product_image" />
                <img src={product.image} alt="product_image" />
                <img src={product.image} alt="product_image" />
            </div>
            <div className="productDisplay-image">
            <img className='image-left' src={product.image} alt="product_image" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-star">
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="start_dull_icon" />
                <p>(113)</p>
            </div>
            <div className="productDisplay-right-price">
                <div className="productDisplay-right-price-old">${product.old_price}</div>
                <div className="productDisplay-right-price-new">${product.new_price}</div>
                
            </div>
            <div className="productDisplay-right-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Reiciendis sint corporis consequuntur, dolorum, commodi sapiente harum pariatur mollitia reprehenderit et a 
                nostrum incidunt minus ullam nihil eveniet quasi tenetur adipisci provident fugit est, quibusdam soluta ea. Obcaecati 
                dignissimos autem ipsam. Voluptatibus deserunt voluptatum id accusantium quasi tempore, ad explicabo error eius quod 
                numquam quibusdam molestiae culpa! Reiciendis omnis beatae quae dolore soluta cum quo necessitatibus nisi adipisci.
            </div>
            <div className="productDisplay-right-size" ref={sizeRef}>
                <h1>select Size</h1>
                <div onClick={()=>{setSetetedsize("S")}} className={selectedsize==='S'?'selected':''}>S</div>
                <div  onClick={()=>{setSetetedsize("M")}} className={selectedsize==='M'?'selected':''}>M</div>
                <div onClick={()=>{setSetetedsize("L")}} className={selectedsize==='L'?'selected':''}>L</div>
                <div onClick={()=>{setSetetedsize("XL")}} className={selectedsize==='XL'?'selected':''}>XL</div>
                <div onClick={()=>handleSizeSelection("XXL")} className={selectedsize==='XXL'?'selected':''}>XXL</div>
                        {/* ... description ...
                        this is the other method of doing the selection by calling the handleSizeSelection rather than the setSizeSelection way
                        */}


            </div>
            <button onClick={handleAddToCart} disabled={isButtonDisable} className='add-to-cart-button'>ADD TO CART</button>

            {/* ... description ...

            we can achieve this function also by using on handelAddtoCart method and disable the Selectedsize property. like this:-

            <button onClick={handleAddToCart} disabled={!selectedsize}>ADD TO CART</button>

            */}
            <p className="productDisplay-right-category"><span>Category :</span>Women,T-Shirt,Crop Top</p>
            <p className="productDisplay-right-category"><span>Tags :</span>Modern,Latest</p>
        </div>
    </div>
  )
}
