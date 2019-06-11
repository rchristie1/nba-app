import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const SideNavigation = props => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      onShowNav={props.onShowNav}
      navStyle={{ color: '#dfdfdf', padding: '10px', background: '#242424', maxWidth: '250px' }}
    >
      <SideNavItems />
    </SideNav>
  );
};

export default SideNavigation;
