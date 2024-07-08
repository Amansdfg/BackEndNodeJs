import Header from "./components/Header.jsx";
import {useState,useEffect} from "react";
import Meals from "./components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import Window from "./components/Window.jsx";
export default function App(){
    const[isModalOpen,setIsModalOpen]=useState(false);
    const[meals,setMeals]=useState([]);
    const[error,setError]=useState(false);
    const[isLoading,setIsLoading]=useState(false);
    console.log("app");
    function closeModal(){
        setIsModalOpen(false);
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
      <Modal open={isModalOpen}>
          <Window onClose={closeModal}/>
        </Modal>
      <Header onOpen={setIsModalOpen} quantity={quantity}/>
      <Meals meals={meals} addToCart={handleAddToCart}/>
    </>
  )
}