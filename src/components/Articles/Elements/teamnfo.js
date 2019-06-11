import React from 'react';
import styles from '../articles.module.scss';

const TeamNFO = (props) => {  
  return (
    <div className={styles.articleTeamHeader}>
      <div 
        className={styles.left}
        style={{
          background:`url(/images/teams/${props.team.image})`
        }}
      >

      </div>
      <div className={styles.right}>
        <div>
          <span>{props.team.city} {props.team.team}</span>
        </div>
        <div>
          <strong>
            {/* W{props.team.stats[0].wins}-LW{props.team.stats[0].loss} */}
            W0-L7
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TeamNFO;
