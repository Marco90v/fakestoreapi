import { createContext, useReducer } from "react";

const userContext = createContext();

const initialState = {
    products:[],
    categorys:[
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'newData':
            return { ...state , products: action.data };
        case 'newCategorys':
            return { ...state , categorys: action.categorys };
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