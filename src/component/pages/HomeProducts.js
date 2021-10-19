import "./page.css"
import data from "../data"
import { Link } from "react-router-dom"
const HomeProducts = ()=>{
    return (
        <div className="content-products">
            <div className="content-items-products">
                    {
                        data.map((item)=>{
                            return <Link
                            style={{textDecoration : "none" , color : "black", fontSize: "1.2rem", fontWeight :"700"}}
                            to={{pathname : `/products/${item.title}`}}
                            className="content-prod"
                            key={item.id}
                            >
                            <img src={process.env.PUBLIC_URL + `/imgs/${item.url}.jpg`} alt="produits"/>
                            <p>{item.title}</p>
                            <p>{item.price}€</p>
                            </Link>
                        })
                    }
            </div>
        </div>
    )
}
export default HomeProducts