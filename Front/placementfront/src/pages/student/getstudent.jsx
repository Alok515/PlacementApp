import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const GetStudent = () => {
    const [students, setStudents ] = useState([]);
    const { emp } = useAuthContext();
    const token = emp.token.split('.')[1];
    const id = JSON.parse(atob(token));
    const { _id } = id;
    
  return (
    <div>getstudent</div>
  )
}

export default GetStudent;