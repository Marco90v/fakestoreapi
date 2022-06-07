import { createContext, useReducer } from "react";

const userContext = createContext();

const myFave = JSON.parse(localStorage.getItem('myFave')) || [];
const user = JSON.parse(localStorage.getItem('user')) || undefined;
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    products:[],
    categorys:[
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ],
    myFave,
    user,
    cart
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'newData':
            return { ...state , products: action.data };
        case 'newCategorys':
            return { ...state , categorys: action.categorys };
        case 'addFave':
            const newFave = [...state.myFave , action.newFave];
            localStorage.setItem('myFave' , JSON.stringify(newFave));
            return { ...state , myFave: newFave };
        case 'deleteFave':
            const newFave2 = state.myFave.filter(item=>item!==action.newFave);
            localStorage.setItem('myFave' , JSON.stringify(newFave2));
            return { ...state , myFave: newFave2 };
        case 'login':
            localStorage.setItem('user',JSON.stringify(action.session));
            return {...state, user: action.session};
        case 'signOff':
            localStorage.removeItem('user');
            return {...state, user: undefined};
        case 'addCart':
            const cartProduct = [...state.cart , action.newProduct];
            localStorage.setItem('cart',JSON.stringify(cartProduct));
            return { ...state , cart: cartProduct };
        case 'deleteCart':
            const cartProduct2 = state.cart.filter(item=>item.id!==action.product);
            localStorage.setItem('cart' , JSON.stringify(cartProduct2));
            return { ...state , cart: cartProduct2 };
        default:
            return state;
    }
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <userContext.Provider value={ { state , dispatch } } >
            {children}
        </userContext.Provider>
    );
}

export { Context , userContext }