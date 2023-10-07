import ClimateEffect from '../../images/climateEffect.jpg'
import GreenHouseEffect from '../../images/greenhouse.jpg'
import IndustrialEffect from '../../images/industrialwaste.jpg'
import NasaData1 from '../../images/NasaData1.png'
import NasaData2 from '../../images/NasaData2.png'
import NasaData3 from '../../images/NasaData3.png'

import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

const ClimateBlogs = () => {
    return <div className="bg-none py-32">
    <section className="bg-none grid md:grid-cols-3 gap-16">
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={GreenHouseEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                The Biggest Threat to Our Future
                </h2>
                <p className='text-gray-100'>The greenhouse effect is a natural phenomenon 
                 crucial for sustaining life on Earth. In this blog, 
                     we'll explore the interconnected relationship between the greenhouse 
                      effect and the water cycle and how human actions affect this delicate 
                       balance.</p>
                <div className="card-actions justify-end mt-5 items-center">
                <label htmlFor="my-modal-5" className="bg-white p-2 rounded-md text-primary">
                  Explore Nasa
                </label>
                <MdOutlineInsertComment className='text-3xl text-white font-semibold' />
                <RiShareForwardFill className='text-3xl text-white font-semibold' />
                    </div>
            </div>
        </div>
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={ClimateEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                What You Need to Know
                </h2>
                <p className='text-gray-100'>The global water cycle commences with the sun's 
                 radiant energy. Its warm 
                     embrace beckons water from oceans, lakes, and rivers, initiating 
                      evaporation. Like a fluid ballet, liquid water transforms into water 
                       vapor, rising towards the heavens. Meanwhile, plants join this dance, 
                        transpiring water through their leaves into the atmosphere.</p>
                <div className="card-actions justify-end mt-5 items-center">
                <button className="bg-white p-2 rounded-md text-primary">Explore 
                 Nasa</button> 
                <MdOutlineInsertComment className='text-3xl text-white font-semibold' />
                <RiShareForwardFill className='text-3xl text-white font-semibold' />
                </div>
            </div>
        </div>
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={IndustrialEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                The Impact of Climate Change on Our Planet’s Future
                </h2>
                <p className='text-gray-100'>The global water cycle commences with the sun's 
                 radiant energy. Its warm 
                     embrace beckons water from oceans, lakes, and rivers, initiating 
                      evaporation. Like a fluid ballet, liquid water transforms into water 
                       vapor, rising towards the heavens. Meanwhile, plants join this dance, 
                        transpiring water through their leaves into the atmosphere.</p>
                <div className="card-actions justify-end mt-5 items-center">
                <button className="bg-white p-2 rounded-md text-primary">Explore 
                 Nasa</button> 
                <MdOutlineInsertComment className='text-3xl text-white font-semibold' />
                <RiShareForwardFill className='text-3xl text-white font-semibold' />
                </div>
            </div>
        </div>
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={GreenHouseEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                A call to Action
                </h2>
                <p className='text-gray-100'>Water, the elixir of life, is becoming 
                 increasingly scarce in many parts of the world. This looming crisis of water 
                  scarcity is a pressing global issue that requires immediate attention and 
                   action. In this blog post, we'll delve into the complexities of water 
                    scarcity, its global impacts, and the urgent need for collective 
                     solutions.</p>
                <div className="card-actions justify-end mt-5 items-center">
                <button className="bg-white p-2 rounded-md text-primary">Explore 
                 Nasa</button> 
                <MdOutlineInsertComment className='text-3xl text-white font-semibold' />
                <RiShareForwardFill className='text-3xl text-white font-semibold' />
                </div>
            </div>
        </div>
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={GreenHouseEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                The threat of Water Scarcity in our way of Life
                </h2>
                <p className='text-gray-100'>Water is often taken for granted, flowing 
                 effortlessly from our faucets and quenching our thirst. However, the reality 
                  is that the availability of freshwater is not infinite. The looming threat 
                   of water scarcity is a grave concern that we must address urgently. In 
                    this blog, we will delve into the challenges posed by water scarcity and 
                     its potential impacts on our way of life.</p>
                <div className="card-actions justify-end mt-5 items-center">
                <button className="bg-white p-2 rounded-md text-primary">Explore 
                 Nasa</button> 
                <MdOutlineInsertComment className='text-3xl text-white font-semibold' />
                <RiShareForwardFill className='text-3xl text-white font-semibold' />
                </div>
            </div>
        </div>
    </section>
</div>
}

export default ClimateBlogs;