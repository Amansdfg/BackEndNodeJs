import logo from "../assets/logo.jpg"
export default function Header({onOpen}){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>    
                <h1>Reactfood</h1>
            </div>
            <nav>
                <button onClick={()=>onOpen(true)}>Cart</button>
            </nav>
        </header>
    )
}