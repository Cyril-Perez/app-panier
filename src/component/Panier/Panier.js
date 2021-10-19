import "./Panier.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Panier = ()=>{

    const total = useSelector(state => state)

    let ttQuantity = [...total.panier]

    let result = 0;

    ttQuantity.forEach((item)=>{
        result += item.quantity
    })
    

    return (
        <Link to="/panier">
        <div className="panier">
            <div className="content-icon">
                <p>Panier</p>
                <span>{result}</span>
            </div>
        </div>
        </Link>
    )
}
export default Panier