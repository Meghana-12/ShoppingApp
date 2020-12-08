export const initialState = {
    cart: [],
    use: null,
};

function Reducer(state, action) {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_CART':
            return {
                ...state, 
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            const basket = [...state.cart];
            const index = state.cart.findIndex((item) => item.id === action.id);
            basket.splice(index,1);
            return {...state, cart: basket};
        default:
            return state;
    }
}

export default Reducer;