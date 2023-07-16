'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Header = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/profile1.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[1] flex justify-center flex-col"
      >
        <TitleText title={<>Hi, I'm <span style={{fontFamily:"cursive", color:"#6BEDFF"}}> Ons Bouguila </span></>} />
        <TitleText title={<><span style={{fontSize:"50px"}}>Frontend developper </span></>} />
        <div className="mt-[31px] flex flex-col max-w-[600px] gap-[24px]">
       
          <h3 className='sm:text-[26px] text-[17px] ' style={{color:"white"}}>I am a Frontend developper,
           I am constantly fueled by my passion for web development and my eagerness to learn new technologies. 
           Being at the forefront of creating engaging and dynamic user experiences is both fulfilling and exciting to me. 
           I find immense joy in crafting visually appealing and intuitive interfaces that bring ideas to life.</h3>
       
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Header;
