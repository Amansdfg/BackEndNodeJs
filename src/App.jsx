import Header from "./components/Header.jsx";
import {useState,useEffect} from "react";
import Meals from "./components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import Window from "./components/Window.jsx";
import Checkout from "./components/Checkout.jsx";
import Success from "./components/Success.jsx";
export default function App(){
    const[isModalOpen,setIsModalOpen]=useState(false);
    const[isCheckoutOpen,setIsCheckoutOpen]=useState(false);
    const[isSuccess,setIsSuccess]=useState(false);
    const[meals,setMeals]=useState([]);
    const[error,setError]=useState(false);
    const[isLoading,setIsLoading]=useState(false);
    console.log("app");
    const[cart,setCart]=useState([]);
    const quantity=cart.reduce((acc,curr)=>acc+curr.count,0);
    function handleRemoveToCart(id){
      const item = cart.find(product => product.id === id);
      if (item) {
          item.count--;
          setCart([...cart.filter(product => product.count > 0)]);
      }
      }

    function handleAddToCart(item) {    
      const found = cart.find(product => product.id === item.id);
      if (found) {
        found.count++;
        setCart([...cart]);
      } else {
        setCart(prev => [
      {
        ...item,
        count: 1
      },
        ...prev,
      ]);
      }
    }
    function handleOpenCheckout(){
      setIsCheckoutOpen(true);
      setIsModalOpen(false);
    }
    function closeModal(){
      setIsModalOpen(false);
      setIsCheckoutOpen(false);
      setIsSuccess(false);
    }
    function handleSuccess(){
      setIsSuccess(true);
      setIsCheckoutOpen(false);
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
  if(isLoading){
      return(
        <div>
          Loading
        </div>
      )
    }
    if(error){
      return(
        <div>
          Error
        </div>
      )
    }
  return(
    <>
      <Modal open={isModalOpen ||isCheckoutOpen||isSuccess}>
          {isModalOpen && <Window onClose={closeModal} cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveToCart} openCheckOut={handleOpenCheckout}/>}
          {isCheckoutOpen && <Checkout onClose={closeModal} openSuccess={handleSuccess}/>}
          {isSuccess && <Success onClose={closeModal}/>}
        </Modal>
      <Header onOpen={setIsModalOpen} quantity={quantity}/>
      <Meals meals={meals} addToCart={handleAddToCart}/>
    </>
  )
}