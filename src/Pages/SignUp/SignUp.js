import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const SignUp = () => {
    const [signUpError, setSignUpError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const displayName = data.name;
                updateUser(displayName)
                    .then(() => { })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
        console.log(data);

    }
    return (
        <div className='flex justify-center items-center h-[890px]'>

            <div className=' border-solid border-2 border-indigo-600borderd w-96 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <h1 className='text-4xl pb-10'>SignUp</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' {...register("name", { required: "Name is required" })} className='input input-bordered w-full max-w-xs' />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email is required" })} type='email' className='input input-bordered w-full max-w-xs' />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "Password must be 6 charecters or longer", },
                            pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'password should contain one Capital letter and one Number' }
                        })} type='password' className='input input-bordered w-full max-w-xs' />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>



                    <button className='btn my-6 bg-[#3A4256] text-white input  w-full max-w-xs'><input type="submit" /></button>

                    <p className='text-center'>Already have an account? <Link to='/login'><span className='text-[#19D3AE]'> Please Login!</span></Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full hover:bg-blue-600 outline-[#3A4256]'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;