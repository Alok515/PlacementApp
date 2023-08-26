import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { emp: action.payload}
        case 'LOGOUT':
            return { emp: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        emp: null
    });

    useEffect(() => {
        const emp = JSON.parse(localStorage.getItem('emp'));
        if (emp) {
            dispatch({ type: 'LOGIN', payload: emp });
        }
    }, []);
    console.log(`Auth`, state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}