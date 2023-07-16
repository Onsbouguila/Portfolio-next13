/* eslint-disable eol-last */

'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/head2.png"
        alt="search"
        className="object-contain"
      />
    
      <img
        src="/head1.png"
        alt="menu"
        className="object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;

