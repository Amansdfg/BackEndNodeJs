import {useRef,useEffect} from "react";
import { createPortal } from "react-dom";
export default function Modal({open,children}){
    const modal=useRef();
    useEffect(()=>{
        if(open){
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    },[open])
    return createPortal(
        <dialog className="modal" ref={modal}>
            {open?children:null}
        </dialog>,
        document.getElementById('modal')
    )
}