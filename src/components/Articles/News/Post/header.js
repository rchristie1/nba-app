import React from 'react';

import TeamNFO from '../../Elements/teamnfo';
import PostData from '../../Elements/postdata';

const Header = (props) => {

  const teamNFO = (team) => {
    return team ? (
      <TeamNFO team={team} />
    ) : null;
  };

  const postData = (date, author) => <PostData data={{date, author}} />;

  return (
    <div>
      {teamNFO(props.teamData)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default Header;
