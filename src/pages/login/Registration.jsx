import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import Lottie from 'lottie-react';
import RegistrationAnimation from './RegistrationAnimation.json'
import Logo from '../../images/hydrospare_Logo.svg';
import './Registration.css';

const Registration = () => {
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
              <div className="flex flex-col justify-center items-center pt-10">
                <img className="w-24" src={Logo} alt="" />
                <h1 className="text-5xl text-white font-bold -mt-3">Registration</h1>
              </div>
              <div className="card-body grid grid-cols md:grid-cols-2 gap-5 items-center">
                <div className='-mt-72'>
                    <Lottie loop={true} animationData={RegistrationAnimation
                    }></Lottie>
                </div>
                <div>
                  <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)} 
                    action="">
                    <div className="form-control">
                        <input
                          type="text"
                          placeholder='Write Your Full Name'
                          className="w-full max-w-xs md:text-md bg-transparent 
                          border-b-2 outline-none text-white text-lg"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "First Name is require",
                            },
                          })}
                        />
                        <label className="label">
                          {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                              {errors.name.message}
                            </span>
                          )}
                        </label>
                      </div>            
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
                      {/* password */}
                      <div className="form-control">
                        <input
                          type="password"
                          className="w-full max-w-xs bg-transparent 
                          border-b-2 outline-none text-white text-lg"
                          placeholder='Confirm Your Password'
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
                        <div className="flex gap-3 text-white">   
                            <input type="radio" name="role" className="radio checked:bg-blue-500" value={'user'} checked 
                             />User
                            <input type="radio" name="role" className="radio checked:bg-blue-500" value={'socailworker'}  
                             />Social   
                             Worker
                        </div>            
                    <button
                        className="btn bg-primary md:w-3/4 text-white ease-in 
                        duration-300 hover:scale-105 text-sm md:text-lg 
                         border-none font-bold"  value="login"
                      >
                        Registration Now
                    </button>
                    <p className="text-white fs-bold text-md"><Link to= 
                      {'/login'}> 
                      Already have an account!</Link>
                    </p>
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

export default Registration;