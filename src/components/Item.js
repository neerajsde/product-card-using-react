import React, { useState } from 'react';
import './Item.css'


function Item(props){
    // Initialize state for the button text
    const [val, setVal] = useState('Add to cart');

    // Function to handle button click
    async function addCart() {
        setVal('Added');
        setTimeout(function(){
            setVal('Add to cart');
        }, 10000);
    }
    return(
        <div className='product-card'>
            <div className='date'>
                <div className='month'>{props.month}</div>
                <div className='year'>{props.year}</div>
                <div className='day'>{props.day}</div>
            </div>
            <div className='product-info'>
                <div className='name'>{props.name}</div>
                <div className='desc'>{props.desc}</div>
            </div>
            
            <button className='btn' onClick={addCart}>{val}</button>
        </div>
    );
}

export default Item;