import Lottie from 'lottie-react';
import MissionAnimation from '../../animation/MissionAnimation.json'
import VisionAnimation from '../../animation/VisionAnimation.json'
import { Link } from 'react-router-dom';

const About = () => {
    return <div className="bg-primary">
        <div className="py-32 mx-32 flex flex-col gap-10">
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
        </div>
    </div>
}

export default About;