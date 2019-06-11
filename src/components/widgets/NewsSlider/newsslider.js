import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './sliderTemplates';
import { URL } from '../../../config';

class NewsSlider extends Component {
  state = {
    news: [],
    players: [],
  };

  UNSAFE_componentWillMount() {
    axios
      .get(`${URL}/videos?_start=${this.props.start}&_end=${this.props.amount}`)
      .then(response => {
        //   this._getPlayerHeadshot('lebron', 'james');
        this.setState({ players: response.data });
      })
      .catch(error => console.log(error));
  }

  _getPlayerHeadshot = (firstName, lastName) => {
    axios
      .get(`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  };

  render() {
    return <SliderTemplates data={this.state.players} type={this.props.type} settings={this.props.settings} />;
  }
}

export default NewsSlider;
