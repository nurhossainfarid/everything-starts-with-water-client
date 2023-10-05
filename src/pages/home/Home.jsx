import Lottie from 'lottie-react';
import EarthAnimation from '../../animation/WaterDrop.json'
import QuizzesAnimation from '../../animation/QuizzesAnimation4.json'
import WaterCycleAnimation from '../../animation/watercycle.mp4.lottie.json'
import ClimateChangeAnimation from '../../animation/ClimateChangeEffect.json'
import bg from '../../images/bg_images/bg9.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="home_bg">
        <img className='fixed z-10 w-full' src={bg} alt="" />
        <div className="absolute z-20 top-0 left-0 py-32 mx-32">
            {/* Problem intro */}
            <section className="flex flex-col md:flex-row items-center gap-10 
             py-10 ">
                <div className="w-2/5">
                    <h1 className="font_outfit text-5xl text-white font-bold">Everything 
                     Starts <br 
                     /> 
                     With Water</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg hover:bg-white 
                     hover:text-primary hover:border-white ">Learn More</button>
                </div>
                <div className="w-1/2">
                  <Lottie  loop={true} animationData={EarthAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Water Cycle*/}
            <section className="flex flex-col md:flex-row items-center gap-16 
             py-10">
                <div className="">
                    <Lottie className='rounded-lg' loop={true} animationData= 
                     {WaterCycleAnimation}> 
                   </Lottie>
                </div>
                <div className="">
                    <h1 className="font_outfit text-5xl text-white font-bold">Water 
                     Cycle</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg 
                     hover:bg-white hover:text-primary hover:border-white">Learn 
                      More</button>
                </div>
            </section>
            {/* Climate Change Effect */}
            <section className="flex flex-col md:flex-row items-center 
             py-10">
                <div className="w-1/2">
                    <h1 className="font_outfit text-5xl text-white font-bold">How To Climate 
                     Change 
                     Effect On Water Cycle</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>Earth has 370 
                     quintillion 
                     gallons of water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate.
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg 
                     hover:bg-white hover:text-primary hover:border-white">Learn 
                      More</button>
                </div>
                <div className="w-1/2">
                  <Lottie  loop={true} animationData={ClimateChangeAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/9NyRpY-9vac?si=OGpYVGivnrXTnRlO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div>
                    <h1 className="font_outfit text-5xl text-white font-bold ">Solution</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg 
                     hover:bg-white 
                     hover:text-primary hover:border-white ">
                        <Link to="/quizzes">
                            Learn More
                        </Link>
                     </button>
                </div>
            </section>
            {/* Quiz */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                <h1 className="font_outfit text-5xl text-white font-bold ">Quizzes</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg hover:bg-white 
                     hover:text-primary hover:border-white ">
                        <Link to="/quizzes">
                            Take Quizzes
                        </Link>
                     </button>
                </div>
                <div>
                    <Lottie  loop={true} animationData={QuizzesAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Blogs */}
            <section>
                <h1>Blogs</h1>
            </section>
        </div>
    </div>
}

export default Home;