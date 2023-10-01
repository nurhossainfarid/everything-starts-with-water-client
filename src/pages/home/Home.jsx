import Lottie from 'lottie-react';
import EarthAnimation from '../../animation/WaterDrop.json'
import './Home.css'

const Home = () => {
    return <div className="relative home_bg">
        <div className="py-32 mx-32 relative">
            {/* Problem intro */}
            <section className="flex flex-col md:flex-row items-center gap-10 
             first-line:py-10">
                <div className="w-2/5">
                    <h1 className="text-5xl text-white font-bold ">Everything Starts <br 
                     /> 
                     With Water</h1>
                    <p className='text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="btn btn-primary text-white text-lg hover:bg-white 
                     hover:text-primary hover:border-white ">Learn More</button>
                </div>
                <div className="w-1/2">
                  <Lottie  loop={true} animationData={EarthAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Water Cycle*/}
            <section className="flex flex-col md:flex-row items-center gap-10 
             first-line:py-10">
                <div className="w-2/5">
                    <h1 className="text-5xl text-white font-bold ">Everything Starts <br 
                     /> 
                     With Water</h1>
                    <p className='text-lg text-gray-100 my-10'>
                        Earth has 370 quintillion gallons of
                        water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate....
                    </p>
                    <button className="btn btn-primary text-white text-lg hover:bg-white 
                     hover:text-primary hover:border-white ">Learn More</button>
                </div>
                <div className="w-1/2">
                  <Lottie  loop={true} animationData={EarthAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Climate Change Effect */}
            <section className="flex flex-col md:flex-row gap-10">
                <div className="w-2/3">
                    <h1>How To Climate Change Effect On Water Cycle</h1>
                    <p>Earth has 370 quintillion gallons of water - but only 0.01% of that is 
                        freshwater that we can use. As climate change alters the global 
                        water cycle, this precious resource is in danger of becoming even 
                        more scarce. Your challenge is to create a visual tool to help 
                        students better understand the complete path of water across the 
                        entire Earth system and how the availability of this critical 
                        resource is affected by our changing climate.
                    </p>
                </div>
                <div className="w-1/2">
                  <Lottie  loop={true} animationData={EarthAnimation}> 
                   </Lottie>
                </div>
            </section>
            {/* Solution */}
            <section>
                <h1>Solution</h1>
            </section>
            {/* Quiz */}
            <section>
                <h1>Quiz</h1>
            </section>
            {/* Blogs */}
            <section>
                <h1>Blogs</h1>
            </section>
        </div>
    </div>
}

export default Home;