import { useState, useEffect } from 'react';
import {currencyFormatter} from "../formatting.js";

function Window({cart,onClose ,onAdd,onRemove}) {
    const totalSum=cart.reduce((acc,curr)=>acc+(curr.price*curr.count),0);
    console.log(totalSum)
    console.log("window");
    return (
        <>
            <div className="cart">
                <h2>Your cart</h2>
                {cart.length===0 && <p>is empty</p>}
                {cart.length>0 && <ul>
                    {cart.map((item)=>(
                        <li key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>{currencyFormatter.format(item.price)}</span>
                            <div className="cart-item-actions">
                                <button onClick={()=>onRemove(item.id)}>-</button>
                                <h3>{item.count}</h3>
                                <button onClick={()=>onAdd(item)}>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
                }   
                <h2 className='cart-total'>
                    {currencyFormatter.format(totalSum)}
                </h2>
            </div>
            <div className="modal-actions">
                <button onClick={onClose}>Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </>
    );
}

export default Window;
