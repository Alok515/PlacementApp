import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (data1) => {
        setIsLoading(true);
        setError(null);

        const res = await axios.post('http://localhost:8000/emp/signup', data1);
        console.log(res);
        if(res.status !== 201) {
            setIsLoading(false);
            setError(res.error);
        }
        else {
            // save the user to local storage
            localStorage.setItem('emp', JSON.stringify(res.data));
            //update the auth context
            console.log('sign up');
            dispatch({type: 'LOGIN', payload: res.data});
            setIsLoading(false);
        }
    }
    return { signup, error, isLoading };
}