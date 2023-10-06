import ClimateEffect from '../../images/climateEffect.jpg'
import GreenHouseEffect from '../../images/greenhouse.jpg'
import IndustrialEffect from '../../images/industrialwaste.jpg'
import NasaData1 from '../../images/NasaData1.png'
import NasaData2 from '../../images/NasaData2.png'
import NasaData3 from '../../images/NasaData3.png'

import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

const ProblemsBlogs = () => {
    return <div className="bg-none py-32">
    <section className="bg-none grid md:grid-cols-3 gap-16">
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={GreenHouseEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                How to Green House Effect our water cycle
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
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal absolute bg-none text-white">
            <div className="modal-box w-11/12 max-w-5xl bg-primary">
            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute 
             right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Green House Effect Nasa Data</h3>
            <p className="py-4">Life on Earth depends on energy from the Sun. About half the 
             light energy reaching Earth's atmosphere passes through the air and clouds to 
              the surface, where it is absorbed and radiated in the form of infrared heat. 
               Nearly 90% of this heat is then absorbed by greenhouse gases and re-radiated, 
                slowing heat loss to space. GHGs include carbon dioxide (CO2), methane (CH4), 
                  nitrous oxide (N2O), chlorofluorocarbons (CFCs), ozone (O3), and water 
                        vapor (H2O).</p>
                        <a target="_blank" href="https://www.earthdata.nasa.gov/learn/pathfinders/greenhouse-gases-data-pathfinder?fbclid=IwAR0jSXfFLkA02E5nyRBfcsC-LwOSvRpJzU8q1YYbrBLGiZw1CdevM1OII1o">Nasa Site Link</a> 
            <div className='flex gap-3 items-center'>
                    <img src={NasaData1} alt="" />    
                    <img src={NasaData2} alt="" />    
                    <img src={NasaData3} alt="" />    
            </div>
            </div>
        </div>
        <div className="card w-96 category_bg shadow-xl">
            <figure><img src={ClimateEffect} alt="Shoes" 
            /></figure>
            <div className="card-body">
                <h2 className="card-title font_outfit text-white">
                Climate Change Effect on Water cycle
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
                Industrial Effect
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
                How to Green House Effect our water cycle
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
                How to Green House Effect our water cycle
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
    </section>
</div>
}

export default ProblemsBlogs;