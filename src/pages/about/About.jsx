import Lottie from 'lottie-react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";


import MissionAnimation from '../../animation/MissionAnimation.json'
import VisionAnimation from '../../animation/VisionAnimation.json'
import { Link } from 'react-router-dom';
import './About.css'

import Farid from '../../images/5.png';
import Masrafi from '../../images/2.png'
import Shamma from '../../images/1.png'
import Roctim from '../../images/4.png'
import Rayhan from '../../images/3.png'
import bg from '../../images/bg_images/bg3.jpg'

const About = () => {
    return <div className="bg-primary">
        <img className='fixed z-10 w-full' src={bg} alt="" />
        <div className="absolute z-20 top-0 left-0 py-32 mx-32 flex flex-col gap-20">
            {/* Describe our application */}
            <section>
                <h1 className="text-5xl text-white font-bold text-center py-10 
                 uppercase">About</h1>
                <p className="text-xl text-gray-100">
                Water: The Earth’s Gift" is an innovative web app that educates users about 
                 the water cycle, addressing water scarcity and climate change's impact. It 
                  offers interactive visualizations, explores water scarcity issues, and 
                   proposes workable solutions. It is intended for a large audience and makes 
                    use of fun puzzles and quizzes to show the value of water conservation 
                     and sustainability.This web-based application offers an engaging and 
                      educational voyage around the world of water, perfect for anyone 
                       interested in learning more about the most valuable resource on our 
                        planet, whether they are students, teachers, environmentalists, or 
                         inquisitive.
                </p>
            </section>
            {/* Mission */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div>
                    <Lottie  loop={true} animationData={MissionAnimation} /> 
                </div>
                <div>
                    <h1 className="text-5xl text-white font-bold 
                    uppercase">Mission</h1>
                    <p className="text-xl text-gray-100 py-10"> Our mission is to overcome 
                     the current issue of water scarcity by 
                        fully comprehending the situation and taking all required 
                        actions in this direction. <br /> <br />
                        Water: The Earth’s Gift” aims to raise awareness about the 
                         importance of responsible water use and inspire action to combat 
                          water scarcity.Here we offer you  games, puzzles to interact 
                           with the present situations of the problem. You will find the 
                            complete visualization and up to date news through  this 
                             application. Then you can evaluate your understanding by 
                              participation in interestings games and puzzles.
                    </p>
                    <button className="btn btn-white text-primary text-lg hover:bg-white 
                     hover:text-primary hover:border-white">
                        <Link to="/games">
                            Start Games
                        </Link>
                     </button>
                </div>
            </section>
            {/* Vision */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className="text-5xl text-white font-bold 
                    uppercase">Vision</h1>
                    <p className="text-xl text-gray-100 py-10"> This application will play a 
                     crucial role in addressing and 
                         potentially reversing water scarcity in the future by facilitating 
                          efficient water management, raising awareness, and promoting 
                           sustainable water use as well as encouraging people not only to 
                            understand the problem but also to actively participate in 
                             efforts to address water scarcity in their communities and 
                              beyond.
                    </p>
                    <div className="flex gap-10">
                        <button className="btn btn-white text-primary text-lg hover:bg-white 
                        hover:text-primary hover:border-white">
                            <Link to="/quizzes">
                                Take Quizzes
                            </Link>
                        </button>
                        <button className="btn btn-white text-primary text-lg hover:bg-white 
                        hover:text-primary hover:border-white">
                            <Link to="/games">
                                Read Blogs
                            </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <Lottie  loop={true} animationData={VisionAnimation} /> 
                </div>
            </section>
            {/* Team Members */}
            <section className='mt-20'>
                <div>
                    <h1 className='text-5xl text-white text-center mb-28 font-bold'>Our 
                     Team</h1>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="team-slide">
                        <img className="team-img w-full" 
                            src={Shamma} />
                        <div className="flex justify-between items-center bg-none">
                            <div>
                                <h1 className="text-2xl text-white font-semibold">Shamma 
                                 Samiha</h1>
                                <p className="text-xl text-white font-semibold">Content 
                                 Creator and writer</p>
                            </div>
                            <div className="flex gap-5 text-white  text-3xl">
                                <a target="_blank" 
                                 href='https://www.facebook.com/profile.php? 
                                  id=100008123599405'> 
                                    <BsFacebook />
                                </a>
                                <a target="_blank" 
                                 href='https://github.com/nurhossainfarid'> 
                                    <BsGithub />
                                </a>
                                <a target="_blank" 
                                 href='https://www.linkedin.com/in/shamma-samiha-4b029b246/'> 
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="team-slide">
                        <img className="team-img w-full" 
                            src={Roctim} />
                        <div className="flex justify-between items-center bg-none">
                            <div>
                                <h1 className="text-2xl text-white font-semibold">Md Rahat 
                                 Roctim</h1>
                                <p className="text-xl text-white font-semibold">UI/UX 
                                 Designer</p>
                            </div>
                            <div className="flex gap-5 text-white  text-3xl">
                                <a target="_blank" 
                                 href='https://www.facebook.com/rahat2924'> 
                                    <BsFacebook />
                                </a>
                                <a target="_blank" 
                                 href='https://github.com/rahat2924'> 
                                    <BsGithub />
                                </a>
                                <a target="_blank" 
                                 href='https://www.linkedin.com/in/mdrahat24/'> 
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="team-slide">
                        <img className="relative team-img w-full" 
                            src={Farid} />
                        <div className="flex justify-between items-center bg-none">
                            <div>
                                <h1 className="text-2xl text-white font-semibold">Nur Hossain 
                                Farid</h1>
                                <p className="text-xl text-white font-semibold">Team Leader & 
                                Developer</p>
                            </div>
                            <div className="flex gap-5 text-white  text-3xl">
                                <a target="_blank" 
                                 href='https://www.facebook.com/nurhossainfarid221'> 
                                    <BsFacebook />
                                </a>
                                <a target="_blank" 
                                 href='https://github.com/nurhossainfarid'> 
                                    <BsGithub />
                                </a>
                                <a target="_blank" 
                                 href='https://www.linkedin.com/in/nur-hossain-farid- 
                                  58725522a/'> 
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="team-slide">
                        <img className="team-img w-full" 
                            src={Masrafi} />
                        <div className="flex justify-between items-center bg-none">
                            <div>
                                <h1 className="text-2xl text-white font-semibold">Masrafe Bin 
                                 Hannan Siam</h1>
                                <p className="text-xl text-white 
                                font-semibold">Researcher</p>
                            </div>
                            <div className="flex gap-5 text-white  text-3xl">
                                <a target="_blank" 
                                 href='https://www.facebook.com/masrafe.siam'> 
                                    <BsFacebook />
                                </a>
                                <a target="_blank" 
                                 href='https://github.com/Masrafe-Siam'> 
                                    <BsGithub />
                                </a>
                                <a target="_blank" 
                                 href='https://www.linkedin.com/in/masrafe-siam-44108b202/'> 
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="team-slide">
                        <img className="team-img w-full" 
                            src={Rayhan} />
                        <div className="flex justify-between items-center bg-none">
                            <div>
                                <h1 className="text-2xl text-white font-semibold">Md Rayhan 
                                 Khan</h1>
                                <p className="text-xl text-white 
                                font-semibold">Researcher</p>
                            </div>
                            <div className="flex gap-5 text-white  text-3xl">
                                <a target="_blank" 
                                 href='https://www.facebook.com/rayhankhan2192/'> 
                                    <BsFacebook />
                                </a>
                                <a target="_blank" 
                                 href='https://github.com/rayhankhan2192'> 
                                    <BsGithub />
                                </a>
                                <a target="_blank" 
                                 href='https://www.linkedin.com/in/rayhankhan2192/'> 
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    </div>
}

export default About;