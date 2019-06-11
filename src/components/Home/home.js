import React from 'react';

import NewsSlider from '../widgets/NewsSlider/newsslider';
import NewsList from '../widgets/NewsList/newsList';
import VideoList from '../widgets/VideoList/videoList';

const Home = () => {
  return (
    <div>
      <NewsSlider
        type='featured'
        start={0}
        amount={3}
        settings={{
          dots: false,
        }}
      />
      <NewsList type='card' loadMore={true} start={3} amount={3} />
      <VideoList type='card' title={true} loadMore={true} start={0} amount={3} />
    </div>
  );
};

export const add = (x,y) => x+y;

export default Home;
