import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ()=>{
    return (
        <div className="content-navbar">
            <Link style={{textDecoration: "none"}} to="/"><p>Accueil</p></Link>
            <Link style={{textDecoration: "none"}} to="/products"><p>Produits</p></Link>          
        </div>
    )
}

export default Navbar