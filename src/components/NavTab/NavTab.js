import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavTab.css';

function NavTab () {
  return(
    <Link to='/#about-project' className='promo__link'>Узнать больше</Link>
  )
};

export default NavTab;