import React, { Component } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import { URL } from '../../../config';
import styles from './newsList.module.scss';
import Button from '../Buttons/button';
import CardInfo from '../CardInfo/cardInfo';

class NewsList extends Component {
  state = {
    teams: [],
    players: [],
    items: [],
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

    if (this.state.players.length < 1) {
      axios
        .get(`${URL}/players`)
        .then(response => this.setState({ players: response.data }))
        .catch(error => console.log(error));
    }

    axios
      .get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then(response => this.setState({ 
        items: [...this.state.items, ...response.data],
        start,
        end
      }))
      .catch(error => console.log(error));
  };

  loadMore = () => {
    const end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
    
  };

  renderNews = type => {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsListWrapper,
              enterActive: styles.newsListWrapperEnter,
            }}
            timeout={500}
            key={i}
          >
            <div key={i}>
              <div className={styles.newsListItem}>
                <a href={`https://nba.com${item.url}`} target='_blank' rel='noopener noreferrer'>
                  <CardInfo topics={item.taxonomy.topics[0].value} teams={this.state.teams} players={this.state.players} date={item.published}/>
                  <h2>{item.shortHeadline}</h2>
                </a>
              </div>
            </div>
          </CSSTransition>
        ));
        break;

      default:
        template = null;
        break;
    }
    return template;
  };

  render() {
    return (
      <div>
        <TransitionGroup component='div' className='list'>
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button type='loadmore' loadMore={() => this.loadMore()} cta='Load More News' />
      </div>
    );
  }
}

export default NewsList;
