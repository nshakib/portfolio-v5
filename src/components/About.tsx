import {motion} from 'framer-motion'
import Lottie from 'react-lottie-player'
import lottieJson from '../lottie.json'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.2}}
            className='flex flex-col lg:flex-row gap-8 md:gap-12 items-center'>
            {/* lottie animation */}
            <motion.div
                className="lg:w-1/2"
                variants={{
                hidden: { opacity: 0, x:-50 },
                show: { opacity: 1,x:0, transition: { duration: 0.8 }},
                }}
            >
                <div
                className="holographic rounded-2xl md:rounded-3xl overflow-hidden
                        p-6 md:p-8 glass dark:glass border border-neo-primary/20"
                >
                <div className="relative aspect-square">
                    <Lottie
                    className="bg-transparent"
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                </div>
            </motion.div>
            
            {/* about me */}
                <motion.div
                className="lg:w-1/2"
                variants={{
                    hidden: { opacity: 0, x:50 },
                    show: { opacity: 1,x:0, transition:{duration: 0.8 }},
                }}
                >
                <span className='inline-block px-4 py-2 glass dark:glass
                rounded-full text-neo-secondary font-medium mb-4'>MY JOURNEY</span>
                <h2 className='text-3xl sms:text-4xl md:text-5xl font-bold 
                mb-6'>
                    <span className='gradient-text'>About Me</span>
                    </h2>
                <p className='text-lg md:text-xl mb-4 md:mb-6'>
                    I'm a digital creator passionate about building immersive
                    experiences at the intersection of design and technology. With
                    over 5 years in the industry, I've helped startups and Fortune
                    500 companies bring their digital visions to life.
                </p>
                <p className='text-lg md:text-xl mb-4 md:mb-6'>
                    My approach combines aesthetic sensibility with technical
                    expertise to create products that are not only beautiful but
                    also intuitive and performant. I believe in pushing boundaries
                    while maintaining usability at the core.
                </p>

                {/* stats */}
                <div className='grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8'>
                    <motion.div
                    className='p-3 md:p-4 rounded-xl glass dark:glass border 
                    border-neo-primary/20'
                    whileHover={{scale:1.05}}
                    >
                        <div className='text-2xl md:text-3xl font-bold text-neo-primary
                        mb-1 md:mb-2'>50+</div>
                        <div>Projects Completed</div>
                    </motion.div>
                    <motion.div
                    className='p-3 md:p-4 rounded-xl glass dark:glass border 
                    border-neo-primary/20'
                    whileHover={{scale:1.05}}
                    >
                        <div className='text-2xl md:text-3xl font-bold text-neo-primary
                        mb-1 md:mb-2'>25+</div>
                        <div>Happy Clients</div>
                    </motion.div>
                </div>

                {/* button */}
                <div className='flex flex-wrap gap-3 md:gap-4'>
                    <motion.a
                    href='#'
                    className='neo-btn px-6 md:px-8 py-3 md:py-4 rounded-full
                    font-bold text-sm md:text-base'
                    whileHover={{scale:1.05}}
                    >
                        Let's Collaborate
                    </motion.a>
                    <motion.a
                    className='px-6 md:px-6 py-3 md:py-4 rounded-full font-bold
                    border-2 border-neo-primary hover:bg-neo-primary/10
                    transition-colors duration-300 flex items-center text-sm 
                    md:text-base'
                    >
                        <FiDownload className='w-5 h-5 mr-2' />
                        Download CV
                    </motion.a>
                </div>

                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}

export default About