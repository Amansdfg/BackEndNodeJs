import { useState, useEffect } from 'react';

function Window({onClose }) {
    const[cart,setCart]=useState([]);
    const quantity=cart.reduce((acc,curr)=>acc+curr.count,0);
    function handleRemoveToCart(id){
        const item=cart.find((product)=>product.id=id);
        if(item){
          item.count--;
          setCart([...cart])
          return;
        }
      }
      function handleAddToCart(item){    
        const found = cart.find((product)=>product.id===item.id);
        if(found){
          found.count++;        
          setCart([...cart]);
          return;
        }
        setCart((prev)=>{
          return[
            {
              ...item,
              count:1
            },
            ...prev,
    
          ]
        })
      }
    console.log("window");
    return (
        <>
            <div className="cart">
                <h2>Your cart</h2>
                <ul>
                    {cart.map((item)=>(
                        <li key={item.id} className="cart-item">
                            {item.name}
                            <div className="cart-item-actions">
                                <button onClick={()=>handleRemoveToCart(item.id)}>-</button>
                                <h3>{item.count}</h3>
                                <button onClick={()=>handleAddToCart(item)}>+</button>
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
