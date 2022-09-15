export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) => basket?.reduce((acc, item) => {
    return acc + item.price;
},0)


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        case "REMOVE_FROM_BASKET":
            let tempBasket = state.basket;
            const index = tempBasket.findIndex((item) => {
                return item.id === action.item.id;
            })
            console.log('====================================');
            console.log(index);
            console.log('====================================');
            tempBasket.splice(index, 1);
            return {
                ...state,
               basket: tempBasket, 
            }
        
            
        default:
            return state;
        
    }
}

export default reducer;