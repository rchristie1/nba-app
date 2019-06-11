import React from 'react';
import styles from './videoList.module.scss';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';

const VideoListTemplate = props => {    
  return props.data.map((item, i) => {
    return <Link to={`/vidoes/${item.id}`} key={i}>
      <div className={styles.videoListItemWrapper}>
        <div className={styles.left} style=
          {{
            background: `url(/images/videos/${item.image})`,
          }}>
          <div></div>
        </div>
        <div className={styles.right}>
          <CardInfo topics={item.team} date={item.date}/>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>;
  });
};

export default VideoListTemplate;
