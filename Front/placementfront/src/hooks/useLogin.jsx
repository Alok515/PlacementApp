import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (data1) => {
        setIsLoading(true);
        setError(null);

        const res = await axios.post('http://localhost:8000/emp/signin', data1);
        console.log(res);
        if(res.status !== 200) {
            setIsLoading(false);
            setError(res.error);
        }
        else {
            // save the user to local storage
            localStorage.setItem('emp', JSON.stringify(res.data));
            //update the auth context
            dispatch({type: 'LOGIN', payload: res.data});
            setIsLoading(false);
        }
    }
    return { login, error, isLoading };
}