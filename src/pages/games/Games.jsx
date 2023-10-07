import bg from '../../images/bg_images/game_bg.jpg';
import ComingAnimation from '../../animation/ComingSoonAnimation.json'
import Lottie from 'lottie-react';

const Games = () => {
    return <div className="bg-primary h-full">
    <img className='fixed z-10 w-full' src={bg} alt="" />
    <div className="absolute z-20 top-40 left-0 mx-32">
        <div className="absolute bg-black opacity-30 w-2/3"></div>
        <section className="flex gap-10">
            <div>    
                <h1 className="text-5xl text-white font-bold
                font_outfit">Games</h1>
                    <p className="text-xl text-white mt-5 font_roboto">Here 
                users will Play an interactive game to evaluate their understanding. Users can 
                Learn how to play The game and then start the game by choosing a specific 
                problem .Users will choose from a solution topic or add one.Then the user will 
                    be directed to choose a character And get to know the solutions they can 
                    apply from their respective place.Then to know more , user will be directed 
                    to NASA website. 
                </p>
            </div>
            <div className='w-full'>
                <Lottie  loop={true} animationData={ComingAnimation} /> 
            </div>
        </section>
        <section className='flex justify-center mt-10'>
            <button className='btn bg-white text-primary hover:bg-primary hover:text-white 
             hover:border-none animate-bounce'>
                <a target='_blank' 
                 href="https://www.canva.com/design/DAFvxyo4mlE/z6sfxc5ARtcrsTLgVr815Q/view? 
                  mode=prototype&fbclid=IwAR3mgvgvlaB3ZKl84sniF3xMS67gJ2Em0EsZRxnwhzh8- 
                   3HbSugq-iDfquk">Demo Game</a>
            </button>  
        </section>
    </div>
</div>
}

export default Games;