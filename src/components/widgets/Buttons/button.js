import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.scss';

const Button = props => {
  let template = null;
  switch (props.type) {
    case 'loadmore':
      template = (
        <div className={styles.blueButton} onClick={props.loadMore}>
          {props.cta}
        </div>
      );
      break;
    case 'linkTo':
      template = (
        <Link to={props.linkTo} className={styles.blueButton} onClick={props.loadMore}>
          {props.cta}
        </Link>
      );
      break;

    default:
      template = null;
      break;
  }

  return template;
};

export default Button;
