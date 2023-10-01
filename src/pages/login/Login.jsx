import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import Lottie from 'lottie-react';
import LoginAnimation from '../../animation/earthAnimation.json'
import Logo from '../../images/hydrospare_Logo.svg';
import './Login.css';

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
    return <div className="login_bg relative h-full">
      <div className="absolute bg-black w-full h-full opacity-20"></div>
      <section >
        <div className="hero py-36">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 shadow-2xl login_glass md:w-3/4">
              <div className="card-body grid grid-cols md:grid-cols-2 gap-5 items-center">
                <div>
                  <Lottie loop={true} animationData={LoginAnimation}></Lottie>
                </div>
                <div>
                <div className="py-10">
                  <h1 className="text-5xl text-white font-bold">Login</h1>
                </div>
                  <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)} 
                   action="">
                      {/* email */}
                      <div className="form-control">
                        <input
                          type="email"
                          placeholder='Enter Your Email'
                          className="w-full max-w-xs bg-transparent 
                          border-b-2  text-white outline-none text-lg"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is require",
                            },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid email",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                          {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </label>
                      </div>
                      {/* password */}
                      <div className="form-control">
                        <input
                          type="password"
                          className="w-full max-w-xs bg-transparent 
                          border-b-2 outline-none text-white text-lg"
                          placeholder='Enter Your Password'
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Password is require",
                            },
                            minLength: {
                              value: 6,
                              message: "Must be use 6 characters password",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.password?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="label-text-alt text-red-500">
                              {errors.password.message}
                            </span>
                          )}
                        </label>
                      </div>    
                    <button
                        className="btn bg-primary md:w-3/4 text-white ease-in 
                        duration-300 hover:scale-105 text-sm md:text-lg 
                         border-none font-bold"  value="login"
                      >
                        Login Now
                    </button>
                    <p className="text-white fs-bold text-md"><Link to= 
                      {'/registration'}> 
                      Create An Account</Link>
                    </p>
                    <p className="text-xl mt-5 text-white">Login with another system</p>
                    <div className="form-control mt-6 flex flex-col gap-5">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
}

export default Login;