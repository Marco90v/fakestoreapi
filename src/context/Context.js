import { createContext, useReducer } from "react";

const userContext = createContext();

const initialState = {
    products:[]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'newData':
            return { ...state , data: action.rest };
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