import React from 'react';
import styles from '../articles.module.scss';

const PostData = (props) => {
  console.log('APDATA');
    
  return (
    <div className={styles.articlePostData}>
      <div>Date: 
        <span> {props.data.date}</span>
      </div>
      <div>Author: 
        <span> Ryan Christie{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
