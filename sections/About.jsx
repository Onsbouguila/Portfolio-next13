'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      > <span>I am currently </span>one year  Frontend Developper  at ADN Expertise</motion.p>
       <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      > <span style={{color:"#4EE7FC", fontWeight:"bold"}}> Creative </span>  ,<span style={{color:"#4EE7FC", fontWeight:"bold"}}> versatile </span>  and <span style={{color:"#4EE7FC", fontWeight:"bold"}}>autonomous</span> . Strongly interested in programming and web development.
      <br/>   </motion.p>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
         I'm always <span className="font-extrabold text-white">motivated</span> for the realization of projects and <span className="font-extrabold text-white">seeking</span> to enhance my knowledge and skills in web development.{' '}
      </motion.p>

    </motion.div>
  </section>
);

export default About;
