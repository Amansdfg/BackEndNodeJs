import {useState} from "react";
export  function Input(defaulValue,validationFn){
    const[inputValue,setInputValue]=useState(defaulValue);
    const[didChanged,setDidChanged]=useState(false);
    const isValid=validationFn(inputValue);
    function handleOnChange(event){
        setInputValue(event.target.value);
        setDidChanged(true);
    }
    function handleOnBlur(){
        setDidChanged(true);
    }
    return{
        value:inputValue,
        handleOnChange,
        handleOnBlur,
        error: !isValid && didChanged
    }
}