import {isFullName,isNotNull,isEmail,isStartWithCapital} from "../utils/validation.js";
import {Input} from "./Input.js";
export default function Checkout({onClose,openSuccess}){
    const{
        value:fullName,
        handleOnChange:fullNameChange,
        handleOnBlur:fullNameBlur,
        error:fullNameError}
        = Input("",(value)=>isFullName(value) && isNotNull(value));
    const{
        value:emailAddress,
        handleOnChange:emailAddressChange,
        handleOnBlur:emailAddressBlur,
        error:emailAddressError}
        =Input("",(value)=>isEmail(value) && isNotNull(value));
    const{
        value:street,
        handleOnChange:streetChange,
        handleOnBlur:streetBlur,
        error:streetError}
        = Input("",(value)=>isNotNull(value));
    const{
        value:postalCode,
        handleOnChange:postalCodeChange,
        handleOnBlur:postalCodeBlur,
        error:postalCodeError}
        = Input('',(value)=>isNotNull(value));  
    const{
        value:city,
        handleOnChange:cityChange,
        handleOnBlur:cityBlur,
        error:cityError}
        =Input("",(value)=>isNotNull(value) && isStartWithCapital(value));    
    function handleSubmit(event){
        event.preventDefault();
        if(fullNameError){
            return;
        }
        console.log("Submited");
        openSuccess();
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount:</p>
            <div className="control">
                <label htmlFor="fullName">Full Name</label>
                <input   
                    id="fullName"
                    type="text"
                    name="fullName"
                    onBlur={fullNameBlur}
                    onChange={fullNameChange}
                    value={fullName}
                    required/>
                {fullNameError && <p>FullName error</p>}
            </div>
            <div className="control">
                <label htmlFor="email">E-Mail Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onBlur={emailAddressBlur}
                    onChange={emailAddressChange}
                    value={emailAddress}
                    required/>
                {emailAddressError && <p>Email error</p>}
            </div>
            <div className="control">
                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    name="street"
                    onBlur={streetBlur}
                    onChange={streetChange}
                    value={street}
                    required/>
            </div>
            <div className="control-row">
                <div className="control">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input 
                        id="postalCode"
                        type="number"
                        name="postalCode"
                        onBlur={postalCodeBlur}
                        onChange={postalCodeChange}
                        value={postalCode}
                        required                     
                    />
                </div>
                <div className="control">
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        name="city"
                        onBlur={cityBlur}
                        onChange={cityChange}
                        value={city}
                        required 
                    />
                </div>
            </div>
            <div className="modal-actions">
                <button onClick={()=>onClose()} className="aman-button">Close</button>
                <button  className="button">Submit order</button>
            </div>
        </form>
    )
}