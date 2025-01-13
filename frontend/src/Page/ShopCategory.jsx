import React, { useContext } from 'react';
import'./Css/ShopCategory.css';
import{ShopContext} from '../Context/ShopContext';
import droop_down from '../Mycomponents/Assets/dropdown_icon.png';
import { Item } from '../Mycomponents/Items/Item';

export const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
return (
    <div className='shopCategory'>
        <img className='shopCategory-banner' src={props.banner} alt='banner'/>
        <div className="shopCategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products 
            </p>
        </div>
        <div className="shopCategory-sort">
            <p>Sort by </p>
            < img src={droop_down} alt='droop_icon'/>
        </div>
        <div className="shopCategory-product">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                    return null;
                }
            })}
        </div>
            <button className="shopCategory-loadmore">Explore More</button>

    </div>
)
}
