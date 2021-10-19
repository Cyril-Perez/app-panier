import "./AllPanier.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AllPanier = ()=>{

    const [buy , setBuy]= useState(false)

    const dispatch = useDispatch()

    const panier = useSelector(state => state)
    

    let result = 0;
    let copyArr = [...panier.panier]
    for(let i=0 ; i < copyArr.length ; i++){
        let calc = copyArr[i].quantity * copyArr[i].price
        result += calc
    }
    
    const handleChangeValue = (event,id)=>{
        const newIndex = panier.panier.findIndex((item)=> item.id === id)
        console.log(newIndex);
        let newArr = {
                ...panier.panier[newIndex],
                quantity : Number(event.target.value)
            }
        
        dispatch({
            type : "changeValue",
            payload : newArr
        })


    }

    return (
        <div className="content-allpanier">
            <h1>Mon panier</h1>
            <p>liste de produits</p>
            <div className="content-products-panier">
                {
                   panier.panier.map((item)=>{
                       return <div className="container-item-panier">
                           <img src={process.env.PUBLIC_URL + `imgs/${item.url}.jpg`} alt="panier"/>
                           <p className="title-item">{item.title}</p>
                           <p>{item.price}€</p>
                           <label htmlFor="quantity-panier">Quantité : </label>
                           <input type="number" id="quantity-panier" onChange={(e)=>{handleChangeValue(e,item.id)}} value={item.quantity}/>
                       </div>
                   }) 
                }
            </div>
            <div>
                <p>Total : {result.toFixed(2)}€</p>
            </div>
        </div>
    )
}
export default AllPanier;