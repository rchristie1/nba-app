import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import SideNavigation from './SideNav/sidenav';

import FontAwesome from 'react-fontawesome';

const Header = props => {

  const navBars = () => (
    <div className={styles.bars} onClick={props.onOpenNav}>
      <FontAwesome name='bars' style={{ color: '#dfdfdf', padding: '10px', cursor: 'pointer' }} />
    </div>
  );

  const logo = () => (
    <Link to='/' className={styles.logo}>
      <img alt='nba logo' src='/images/nba_logo.png' /> 
      {/* NBA */}
    </Link>
  );

  return (
    <header className={styles.header}>
      <SideNavigation {...props} />
      <div className={styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
