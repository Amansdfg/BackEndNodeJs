import Header from "./components/Header.jsx";
import {useState,useEffect} from "react";
import Meals from "./components/Meals.jsx";
import Modal from "./components/Modal.jsx";
export default function App(){
    const[isModalOpen,setIsModalOpen]=useState(false);
    const[meals,setMeals]=useState([]);
    const[cart,setCart]=useState([]);
    const[error,setError]=useState(false);
    const[isLoading,setIsLoading]=useState(false);
    function closeModal(){
        setIsModalOpen(false);
    }
    function handleAddToCart(item){
      if(cart.includes(item)){
        return;
      }
      setCart((prev)=>{
        return[
          ...prev,
          item
        ]

      })
    }
    useEffect(()=>{
        setIsLoading(true);
        fetch("http://localhost:3000/meals").
            then((response)=>{
                if(!response.ok){
                    throw new Error("Error");
                }
                return response.json();
            })
            .then((data)=>{
                setMeals(data);
                setIsLoading(false);
            })
            .catch((error)=>{
                setIsLoading(false);
                setError(true);
            })
    },[])
  return(
    <>
      <Modal open={isModalOpen}>
            <div className="cart">
                <h2>Your cart</h2>
                <ul>
                  {cart.map((item)=>(
                    <li key={item.id} className="cart-item">
                      {item.name}
                      <div className="cart-item-actions">
                        <button>-</button>
                        <button>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="modal-actions">
              <button onClick={()=>closeModal()}>Close</button>
              <button className="button">Go to Checkout</button>
            </div>
        </Modal>
      <Header onOpen={setIsModalOpen}/>
      <Meals meals={meals} addToCart={handleAddToCart}/>
    </>
  )
}