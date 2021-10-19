import "./ShowProducts.css"
import { useParams } from "react-router"
import data from "../data"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const ShowProducts = ()=>{

    const test = useSelector(state => state)
    
    useEffect(()=>{
        console.log(test);
    },[test])
    const {id} = useParams()
    
    const dispatch = useDispatch()
  
    const [nbr , setnbr] = useState(1)
    const show = data.filter((item)=> item.title === id )
    
    let infos = [
        {
            ...show[0],
            quantity : nbr
        },
    ]
    
    const handleClickForm = (e)=>{
        e.preventDefault()
            dispatch({
                type : "majProducts",
                payload : infos
            })
    }
    const saveValue = (e)=>{
        setnbr(Number(e.target.value))
    }

    return (
        <div className="content-show-products">
            <form onSubmit={handleClickForm} className="content-form-products">
                <img src={process.env.PUBLIC_URL + `/imgs/${show[0].url}.jpg`} alt="produits"/>
                <p>{show[0].title}</p>
                <p>{show[0].price}€</p>
                <label htmlFor="quantity"></label>
                <input onChange={saveValue} type="number" id="quantity" value={nbr} />
                <button>Ajouter au panier</button>
            </form>
        </div>
    )
}

export default ShowProducts