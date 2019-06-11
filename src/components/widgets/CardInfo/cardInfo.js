import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.module.scss';

const CardInfo = props => {  
  const date = () => {
    const articleDate = new Date(props.date);
    return articleDate.toLocaleDateString();
  };

  return (
    <div className={styleMedia.cardInfo}>
      <span className={styles.teamName}>{props.topics}</span>
      <span className={styles.date}>
        <FontAwesome name='clock-o' />
        {date()}
      </span>
    </div>
  );
};

export default CardInfo;
