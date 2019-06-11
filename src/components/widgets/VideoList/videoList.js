import React, { Component } from 'react';
import styles from './videoList.module.scss';
import axios from 'axios';
import VideoListTemplate from './videoListTemplate';


import { URL } from '../../../config';
import Button from '../Buttons/button';

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  
  UNSAFE_componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then(response => this.setState({ teams: response.data }))
        .catch(error => console.log(error));
    }

    axios
      .get(`${URL}/videodetails?_start=${start}&_end=${end}`)
      .then(response => this.setState({ 
        videos: [...this.state.videos, ...response.data],
        start,
        end
      }))
      .catch(error => console.log(error));
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA </strong>Videos
      </h3>
    ) : null;
  };

  loadMore = () => {
    // const start = this.state.videos.length + this.state.end;
    // const end = start + 3;
    // this.request(start, end);

    const end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
    
  };

  renderButton = () => {
    return this.props.loadMore ? <Button type='loadmore' loadMore={() => this.loadMore()} cta='Load More Videos' /> : <Button type='linkTo' cta='More Videos' linkTo='/vidoes' />;
  };


  renderVideos = () => {
    let template;

    switch (this.props.type) {
      case 'card':
        template = <VideoListTemplate data={this.state.videos} teams={this.state.teams} />;
        break;
      default:
        template = null;
        break;
    }

    return template;
  };

  render() {    
    return (
      <div className={styles.videoListWrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
