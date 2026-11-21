import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {

  const [activeTool, setActiveTool] = useState(null);

  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        À propos de moi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            Ingénieur Systèmes certifié RHCSA, spécialisé en infrastructures critiques : réseaux, linux, virtualisation et automatisation DevSecOps/IaC pour des plateformes fiables et scalables. 
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'
          >
            Tech Stack & Outils
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='grid grid-cols-5 gap-3 sm:gap-5 w-max'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                onClick={() => setActiveTool(activeTool === index ? null : index)}
                onMouseLeave={() => setActiveTool(null)}
                className='relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white/10'
              >
                
                <Image 
                  src={isDarkMode ? tool.iconDark : tool.icon} 
                  alt={tool.name} 
                  className='w-5 sm:w-7' 
                />


                <span
                  className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 rounded-md whitespace-nowrap pointer-events-none transition-opacity duration-200 z-20 dark:bg-white dark:text-black ${
                    activeTool === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {tool.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
