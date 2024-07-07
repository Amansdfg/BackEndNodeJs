import logo from "../assets/logo.jpg"
export default function Header({onOpen,quantity}){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>    
                <h1>Reactfood</h1>
            </div>
            <nav>
                <button className="text-button" onClick={()=>onOpen(true)}>Cart ({quantity})</button>
            </nav>
        </header>
    )
}