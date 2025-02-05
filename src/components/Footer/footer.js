import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

import {CURRENT_YEAR} from '../../config'; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to='/' className={styles.logo}>
        <img alt='nba logo' src='/images/nba_logo.png' /> NBA
      </Link>
      <div className={styles.right}>
          @NBA {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
