import Lottie from 'lottie-react';
import QuizzesAnimation from '../../animation/QuizzesAnimation4.json'
import WaterCycleAnimation from '../../animation/watercycle.mp4.lottie.json'
import ClimateChangeAnimation from '../../animation/ClimateChangeEffect.json'
import EarthAnimation from '../../animation/EarthAnimationWater.json'
import bg from '../../images/bg_images/bg9.jpg'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="home_bg">
        <img className='fixed z-10 w-full' src={bg} alt="" />
        <div className="absolute z-20 top-0 left-0 py-48 mx-32 flex flex-col gap-24">
            {/* Problem intro */}
            <section className="flex flex-col md:flex-row items-center gap-10 
            ">
                <div className="w-3/5">
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
            ">
                <div className="">
                    <Lottie className='rounded-lg' loop={true} animationData= 
                     {WaterCycleAnimation}> 
                   </Lottie>
                </div>
                <div className="">
                    <h1 className="font_outfit text-5xl text-white font-bold">Water 
                     Cycle</h1>
                    <p className='font_roboto text-lg text-gray-100 my-5'>
                    The water cycle is like nature's fantastic water adventure! It all starts 
                     with water on Earth's surface, like rivers, lakes, and even puddles, 
                      heating up and turning into invisible steam. This steam rises up into 
                       the sky, forms fluffy clouds, and then, when the clouds get heavy, 
                        it's like nature's magic show as they release rain, snow, or even 
                         hail! This whole process keeps our planet cool, plants happy, and 
                          provides us with the water we need for drinking, playing, and more. 
                           So, it's like Earth's never-ending water party in the sky!
                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg 
                     hover:bg-white hover:text-primary hover:border-white">Learn 
                      More</button>
                </div>
            </section>
            {/* Climate Change Effect */}
            <section className="flex flex-col md:flex-row items-center 
            ">
                <div className="w-1/2">
                    <h1 className="font_outfit text-5xl text-white font-bold">How To Climate 
                     Change 
                     Effect On Water Cycle</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>Climate change is 
                     like a tricky weather game. It's making rain uneven - some places get 
                      too little, causing droughts, while others get too much, leading to 
                       floods. Plus, it's melting Earth's icy treasures, like glaciers. This 
                        messes up our water supply and makes it hard to predict when and 
                         where we'll get water. We need to learn about it and find ways to 
                          keep our water safe and steady.
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
            <iframe className="w-full aspect-video" 
            src="https://www.youtube.com/embed/Oanv-TCA9G4?si=PFZ2Zw6Ukucuu_Nd" 
             title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
               </iframe>
                <div>
                    <h1 className="font_outfit text-5xl text-white font-bold ">Solution</h1>
                    <p className='font_roboto text-lg text-gray-100 my-10'>
                    We can beat water scarcity by becoming water-saving heroes, using cool 
                     tech like desalination, and teaming up to protect our planet's water! 
                      So, let's join forces and make a splash in the fight against water 
                       scarcity while having fun and saving our planet! 
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
                    Are you ready to test your knowledge on one of the world's most pressing 
                     issues? Join us for an exciting journey through the depths of water 
                      scarcity and its ingenious solutions. 
                    Prizes, surprises, and a chance to become a water-saving champion await! 
                     Let's quench our curiosity and make a splash together in the quest for a 
                      water-secure future. 

                    </p>
                    <button className="font_outfit btn btn-primary text-white text-lg 
                     hover:bg-white 
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
        </div>
    </div>
}

export default Home;