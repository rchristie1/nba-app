import React, { Component } from 'react';

import axios from 'axios';
import {URL} from '../../../../config';

import styles from '../../articles.module.scss';
import Header from './header';

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  }

  UNSAFE_componentWillMount() {
    axios.get(`${URL}/VideoDetails?id=${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        let article = res.data[0];

        this.setState({
          article,
          team: res.data
        });

        // axios.get(`${URL}/teams?id=${article.team}`)
        //   .then(res => {
        //     this.setState({
        //       article,
        //       team: res.data
        //     });
        //   });
      })
      .catch(err => {
        console.log(err);
      
      });
  }

  render() {
    
    const article = this.state.article;
    const team = this.state.team;
    
    console.log(team, article);
    return (
      <div className={styles.articleWrapper}>
        <Header 
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage}
            style={{
              background: `url(/images/articles/${article.id}.jpg)`
            }}
          ></div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
