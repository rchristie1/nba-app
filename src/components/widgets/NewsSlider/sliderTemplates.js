import React from 'react';

import Slick from 'react-slick';
import styles from './silderTemplates.module.scss';

const SliderTemplates = props => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings,
  };

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={styles.featuredItem}>
              <div className={styles.featuredImage} style={{ background: `url(${item.listImage.source})` }}>
                <a href={`https://nba.com${item.url}`} target='_blank' rel='noopener noreferrer'>
                  <div className={styles.featuredCaption}>{item.title}</div>
                </a>
              </div>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
      break;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
