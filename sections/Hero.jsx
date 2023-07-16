'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        I am currently working at       </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative  md:-mt-[20px] -mt-[12px] justify-center items-center "
      >
        <img
          src="/adn.png"
          alt="hero_cover"
          style={{ margin: 'auto' }}
          className="w-50 sm:h-[300px] h-[350px] rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
