export default function Success({onClose}){
    return(
        <div className="">
            <h3>Success!</h3>
            <p>Your order was submited succesfully.</p>
            <p>We will get back you with more details via within the next few minuts</p>
            <button className="button" onClick={()=>onClose()}>Close</button>
        </div>
    )
}