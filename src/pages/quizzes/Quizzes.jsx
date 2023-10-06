import Lottie from 'lottie-react';

import ClimateAnimation from '../../animation/ClimateChangeEffect.json'
import WasteManagementAnimation from '../../animation/WasteAnimation.json'
import SafeWaterAnimation from '../../animation/SafeWater.json'
import WaterCycleAnimation from '../../animation/WaterCycle.json'
import bg from '../../images/bg_images/bg.jpg'

import './Quizzes.css'

const Quizzes = () => {
    return <div className="bg-primary h-full">
        <img className='fixed z-10 w-full' src={bg} alt="" />
        <div className="absolute z-20 top-40 left-0">
            <section className="">
                <div className="absolute bg-black w-full opacity-20"></div>
                <h1 className="text-5xl text-white text-center font-bold
                 font_outfit">Quizzes</h1>
                <p className="text-xl text-white text-center mt-5 font_roboto">Brain Teasers 
                 Galore: Welcome to the Quiz Zone!</p>
            </section>
            <div className="mx-32 py-20">
                <section className="grid grid-cols-1 justify-center md:grid-cols-2 gap-16 
                my-10 md:w-8/12 mx-auto">
                    <div className='category_bg py-20 rounded-md hover:scale-110 ease-in-out 
                     duration-150 flex flex-col justify-around'>
                        <div className="-mt-16">
                            <Lottie  loop={true} animationData={WaterCycleAnimation} /> 
                        </div>
                        <p className="text-4xl font-semibold text-center font_outfit 
                        text-white">Water 
                        Cycle</p>
                    </div>
                    <div className='category_bg py-20 rounded-md hover:scale-110 ease-in-out 
                     duration-150 flex flex-col justify-around'>
                        <div>
                            <Lottie  loop={true} animationData={ClimateAnimation} /> 
                        </div>
                        <p className="text-4xl font-semibold text-center font_outfit 
                        text-white">Climate 
                        Change</p>
                    </div>
                    <div className='category_bg py-20 rounded-md hover:scale-110 ease-in-out 
                     duration-150 flex flex-col justify-around'>
                        <div>
                            <Lottie  loop={true} animationData={WasteManagementAnimation} /> 
                        </div>
                        <p className="text-4xl font-semibold text-center font_outfit 
                        mt-10 text-white">Waste 
                        Management</p>
                    </div>
                    <div className='category_bg py-20 rounded-md hover:scale-110 ease-in-out 
                     duration-150 flex flex-col justify-around'>
                        <div className='w-5/6 mx-auto'>
                            <Lottie  loop={true} animationData={SafeWaterAnimation} /> 
                        </div>
                        <p className="text-3xl font-semibold text-center font_outfit 
                        text-white">Actions 
                        Against Water Problem</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
}

export default Quizzes;