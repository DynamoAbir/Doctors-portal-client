import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
    const [loginError, setLoginError] = useState('')
    const { login } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    // const [data, setData] = useState('')
    const handleLogin = (data) => {
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => setLoginError(error.message))
        console.log(data.email, data.password);
    }
    return (
        <div className='flex justify-center items-center h-[890px]'>

            <div className=' border-solid border-2 border-indigo-600borderd w-96 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h1 className='text-4xl pb-10'>Login</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: "Email is required" })} className='input input-bordered w-full max-w-xs' />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

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
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    </div>
                    {/* Daisy Ui input */}

                    <p>Forget Password?</p>
                    <button className='btn my-6 bg-[#3A4256] text-white input  w-full max-w-xs'><input type="submit" /></button>

                    <p className='text-center'>New to Doctors Portal? <Link to='/signup'><span className='text-[#19D3AE]'> Create new account</span></Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full hover:bg-blue-600 outline-[#3A4256]'>CONTINUE WITH GOOGLE</button>
                    <p className='text-red-600'>{loginError}</p>
                </form>
            </div>
        </div>
    );
};
/* 73-8  3:03mint */
export default Login;