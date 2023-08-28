import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const GetInterview = () => {
    const [interviews, setInterviews ] = useState([]);
    const { emp } = useAuthContext();
    const token = emp.token.split('.')[1];
    const id = JSON.parse(atob(token));
    const { _id } = id;

    const authAxios = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            Authorization: 'Bearer ' + emp.token,
        }
    });

    const getInfo = async () => {
        const res = await authAxios.get('/student/getinterview/' + _id );
        if ( res.status === 200) {
            setInterviews(res.body);
        }
    }
  return (
    <>
    <div>getstudent</div>
    <button onClick={getInfo} >Click</button>
    {
        interviews && interviews.map(interview=>(
            <div key={interview.id}>{interview.name}</div>
        ))
    }
    </>
  )
}

export default GetInterview;