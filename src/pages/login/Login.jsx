import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import './Login.css';

const Login = () => {
    return <div className="login_bg relative h-screen">
              <section className="">
        <div className="">
          <div className="absolute bg-black w-full h-full opacity-40"></div>
          <div className="relative pt-28">
            <h1 className="text-5xl text-white text-center mt-5">Login</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-16">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 shadow-2xl md:w-3/4 bg-gradient-to-r
             from-cyan-500 to-blue-500">
              <div className="card-body grid grid-cols md:grid-cols-2 gap-5">
                {/* <div>
                  <Lottie loop={true} animationData={LoginAnimation2}></Lottie>
                </div> */}
                <div>
                  <p className="text-cyan-300 fs-semibold text-md">New To IEO???? <Link to= 
                  {'/registration'}> 
                    <small className='text-white ml-1 fs-bold text-md'>Create An 
                     Account</small></Link>
                  </p>
                    <form action="">
                        <label htmlFor="email">Email</label> 
                        <input type="email" />  
                        <label htmlFor="password">Password</label>
                        <input type="password" />     
                    <button
                        className="btn btn-white bg-purple-600 md:w-3/4 text-white hover:bg- 
                         pink-500 ease-in 
                         duration-300 hover:scale-105 text-sm md:text-lg border-none"
                        value="login"
                      >
                        Login
                      </button>
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