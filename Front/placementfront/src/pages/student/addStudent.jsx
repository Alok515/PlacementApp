import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
const InputDiv = ({ register, type, place }) => (
    <>
        <label htmlFor={place}>{ place }</label>
        <input type={type} placeholder={place} id= {place} {...register(place)} />
    </>
)

const AddStudent = () => {
    const { register, handleSubmit } = useForm();
    const { emp } = useAuthContext();
    
    const authAxios = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            Authorization: `Bearer ${emp.token}`,
            "Content-Type" : 'application/json'
        }
    })
    const submitData = async (data) => {
        const token = emp.token.split('.')[1];
        const id = JSON.parse(atob(token));
        const { _id } = id;
        console.log(_id);
        const res = await authAxios.post('/student/addstudent/' + _id , data);
        if( res.status === 201) {
            alert('Student added successfully');
        }
        else{
            console.log("Student was not added successfully");
        }
    }

  return (
    <div>
        <div>Add Student Details</div>
        <form onSubmit={handleSubmit(submitData)}>
            <InputDiv register={register} type={"text"} place={"Batch"} />
            <InputDiv register={register} type={"text"} place={"Name"} />
            <InputDiv register={register} type={"email"} place={"email"} />
            <InputDiv register={register} type={"text"} place={"collage"} />
            <InputDiv register={register} type={"number"} place={"Dsa"} />
            <InputDiv register={register} type={"number"} place={"React"} />
            <InputDiv register={register} type={"number"} place={"webD"} />
            <InputDiv register={register} type={"text"} place={"Status"} />
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default AddStudent;