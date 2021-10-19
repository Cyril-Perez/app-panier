const initState = {
    panier : []
}

const shopReducer = (state = initState, action)=>{
            switch (action.type) {
                case "majProducts":
                 const newIndex = state.panier.findIndex((item)=> { return item.id === action.payload[0].id})
                 console.log(newIndex);
                    //si il existe deja ce produits au 
                    if(newIndex !== -1){
                        //findIndex pour remplacer l'ancien par le nouveau 
                    
                        console.log(newIndex);
                        let newObj = {
                            ...state.panier[newIndex],
                            quantity :   action.payload[0].quantity + state.panier[newIndex].quantity 
                            // 
                        }
                        let newArr = [...state.panier]
                        //maj ancien obj newObj
                        newArr.splice(newIndex,1,newObj)

                        return {
                            panier : newArr 
                        }
                    }
                    else{
                            let newArrNever = [...state.panier]
                            let data = {...action.payload[0]}
                            newArrNever.push(data)
                        return {
                            panier : newArrNever
                        }
                    }
                    
                    case "changeValue":
                        const newIndexChange = state.panier.findIndex((item)=> item.id === action.payload.id)
                        console.log(newIndexChange);
                        let newArr = [...state.panier]
                        newArr.splice(newIndexChange,1,action.payload)
                        return {
                            panier : newArr
                        }
                
                default:
                    return state
                    
            }
}

export default shopReducer