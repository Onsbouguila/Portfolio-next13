'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn, slideIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className=" flex justify-center flex-col"
      >
        <TitleText title={<>About me</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
        <p className='sm:text-[30px] text-[20px]  text-white'>I am currently one year Frontend Developper at ADN Expertise

<span style={{color:"#4EE7FC", fontWeight:"bold"}}> Creative </span>  ,<span style={{color:"#4EE7FC", fontWeight:"bold"}}> versatile </span>  and <span style={{color:"#4EE7FC", fontWeight:"bold"}}>autonomous</span> . Strongly interested in programming and web development.
      <br/></p><p  className='sm:text-[30px] text-[20px]  text-white'>          I'm always <span className="font-extrabold text-white">motivated</span> for the realization of projects and <span className="font-extrabold text-white">seeking</span> to enhance my knowledge and skills in web development.{' '}
</p>
          {/* {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}  */}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div  />
        <img
          src="/profile.png"
          alt="hero_cover"
          style={{borderRadius:"50%"}}
          className="w-[100%]  object-cover z-10 relative"
        />   
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
