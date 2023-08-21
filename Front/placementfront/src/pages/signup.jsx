import { useForm} from 'react-hook-form';

const SignUp = ( ) => {
    const { register, handleSubmit, formState: { errors}} = useForm();

    const submitForm = (data) => {
        console.log(data);
    }
    return (
    <div className='flex justify-center items-center mt-14'>
        <div className="w-3/4 px-10 py-20 lg:w-1/3 bg-white rounded-xl border-2 border-black">
        
            <h1 className="text-3xl font-semibold text-center">SignUp Form</h1>
            <p className="font-medium text-lg text-gray-500 mt-4 text-center">Enter Your Details To Register.</p>
            <form onSubmit={handleSubmit(submitForm)} className="mt-16">
                <label className="text-lg font-medium">Name</label>
                <input 
                    type="text"
                    className="w-full border-2 bg-transparent border-gray-400 rounded-xl p-2 mt-1"
                    placeholder='Enter Name'
                    {...register('name', {required: true})}
                />
                <label className="text-lg font-medium">Email</label>
                <input 
                    type="email"
                    className="w-full border-2 bg-transparent border-gray-400 rounded-xl p-2 mt-1"
                    placeholder='Email Address'
                    {...register('email', {required: true})}
                />
                <label className='text-lg font-medium mt-4'>Password</label>
                <input
                    type="password"
                    className='w-full border-2 bg-transparent border-gray-400 rounded-xl p-2 mt-1'
                    placeholder='Password'
                    {...register('password', {required: true})}
                />
                <div>
                    {errors.email && <span className='p4 bg-red-200 text-lg font-bold'>Email is required</span>}
                    {errors.password && <span className='p4 bg-red-200 text-lg font-bold'>Password is required</span>}
                </div>

                <div className='mt-8 flex flex-col gap-y-3'>
                    <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full rounded-xl p-3 mt-4 border-2 bg-indigo-500 border-gray-400 font-bold text-lg text-white'>Sign Up</button>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <p className='font-bold'>Have An Account?</p>
                    <button className='text-blue-800 font-base ml-2'>Login</button>
                </div>
            </form>
        </div>
    </div>);
}

export default SignUp;