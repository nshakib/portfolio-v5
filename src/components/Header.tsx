import React, { useState } from 'react'
import { motion,  spring } from 'framer-motion'
import { assets, navItems } from '../assets/assets'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { toggleTheme } from '../utils/theme'


const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(!isDark);
  }

  return (
    <>
      {/* navbar */}
      <motion.nav
      initial={{ y: -50, opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ y: 0, opacity: 1, backdropFilter: 'blur(20px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className='fixed w-full z-50 shadow-xl bg-white/10 dark:bg-black/10'>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          

         
          <motion.span
          initial={{ opacity: 0 , x:-20}}
          animate={{ opacity: 1 , x:0}}
          transition={{duration:0.7}}
          whileHover={{scale:1.05}}
          className='text-2xl font-bold gradient-text cursor-pointer flex items-center gap-2'
          >
            <motion.img src={assets.logoImg} alt="logo" className='h-10' />
            Shakib
          </motion.span>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-10'>
            {navItems.map((item, index) => (
              <motion.a
              initial={{ opacity: 0 , x:-15}}
              animate={{ opacity: 1 , y:0}}
              transition={{type:spring, stiffness:120}}
              whileHover={{y:-3}}
              key={index}
              href={item.href}
              className='relative group hover:text-neo-secondary'>
                {item.label}
              </motion.a>
            ))}
            {/* resume button */}
            <motion.button
            whileHover={{scale:1.06,
              boxShadow:"0 0 20px rgba(110, 68, 255, .5)"
            }}
            className='px-6 py-2 rounded-full border dark:border-gray-300
            font-semibold cursor-pointer'
            >
              Resume
            </motion.button>
            {/* theme toggle button */}
            <motion.button
            className='w-10 h-10 rounded-fill glass dark:glass flex items-center
            justify-center'
            onClick={handleToggleTheme}
            whileHover={{scale:0.8, rotate:180}}
            transition={{type:"spring", stiffness:200}}
            >
              {isDark ? 
              (<FiSun className='w-6 h-6 text-yellow-300' /> )
              :
                (<FiMoon className='w-6 h-6 text-neo-dark' />)
              }
            </motion.button>
          </div>

          {/* mobile navigation */}
          <div className='lg:hidden flex space-x-4'>
            <motion.button
            className='w-10 h-10 rounded-fill glass dark:glass flex items-center
            justify-center'
            onClick={handleToggleTheme}
            whileHover={{scale:0.8, rotate:180}}
            transition={{type:"spring", stiffness:200}}
            >
              {isDark ? 
              (<FiSun className='w-6 h-6 text-yellow-300' /> )
              :
                (<FiMoon className='w-6 h-6 text-neo-dark' />)
              }
            </motion.button>
            <button
            onClick={() => setMobileMenu(true)}
            className='lg:hidden p-2 rounded-full glass dark:glass'
            >
              <FiMenu className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
      </motion.nav>
      {/* mobile menu */}
      {mobileMenu && (
        <motion.div
        initial={{backdropFilter: 'blur(0px)', opacity: 0 }}
        animate={{ backdropFilter: 'blur(20px)', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='fixed inset-0 z-50 flex items-center justify-center'
        onClick={() => setMobileMenu(false)}
        >
          <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='space-y-10 text-center'
          >
            {navItems.map((item, index) => (
              <motion.a
              key={index}
              href={item.href}
              
              onClick={() => setMobileMenu(false)}
              initial={{opacity:0, scale:0.8}}
              animate={{opacity:1, scale:1}}
              transition={{delay:0.1 * index, type:"spring", stiffness:120}}
              className='block text-4xl font-bold hover:text-neo-secondary'
              >
                {item.label}
              </motion.a>
            ))}
            {/* resume button */}
            <motion.button
            className='neo-btn px-10 py-4 rounded-full font-bold text-xl cursor-pointer'
            whileHover={{scale:1.1}}
            >
              Download Resume
            </motion.button>
          </motion.div>
          {/* close button */}
          <motion.button
          onClick={() => setMobileMenu(false)}
          initial={{scale:0}}
          animate={{scale:1}}
          whileHover={{rotate:90, scale:1.1}}
          className='absolute top-8 right-8 p-4 rounded-full glass dark:glass
          cursor-pointer'
          >
            <FiX className='w-7 h-7' />
          </motion.button>
        
        </motion.div>
      )}
    </>
    
  )
}

export default Header