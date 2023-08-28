import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const InputDiv = ({ register, type, place }) => (
    <>
        <label htmlFor={place}>{ place }</label>
        <input type={type} placeholder={place} id= {place} {...register(place)} />
    </>
)

const AddInterview = () => {
    const { register, handleSubmit } = useForm();
    const { emp } = useAuthContext();
    const submitIt = async (data) => {
        console.log(data);
        console.log(emp);
        const token = emp.token.split('.')[1];
        const id = JSON.parse(atob(token));
        console.log(id);
        const { _id } = id;
        console.log(_id);
        const res = await axios.post('http://localhost:8000/student/addinterview/' + _id, data, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${emp.token}`
            }
        }, );
        if (res.status !== 201) {
            console.log(res);
        }
        console.log(res);
    }
  return (
    <div>
        <div>Add New Interview</div>
        <form onSubmit={handleSubmit(submitIt)}>
            <InputDiv register={register} place="Interview" type="text" required/>
            <InputDiv register={register} place="Date" type="date" required/>
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default AddInterview;