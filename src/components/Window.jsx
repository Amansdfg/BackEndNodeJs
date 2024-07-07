import { useState, useEffect } from 'react';

function Window({ cart, onClose }) {

    return (
        <>
            <div className="cart">
                <h2>Your cart</h2>
                <ul>
                    {cart.map((item)=>(
                        <li key={item.id} className="cart-item">
                            {item.name}
                            <div className="cart-item-actions">
                                <button>-</button>
                                <h3>{item.count}</h3>
                                <button>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="modal-actions">
                <button onClick={onClose}>Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </>
    );
}

export default Window;
