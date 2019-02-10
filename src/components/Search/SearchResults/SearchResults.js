import React, { Component } from 'react';
import classes from './SearchResults.module.scss';
import SearchResult from './SearchResult/SearchResult';

class SearchResults extends Component {


  render () {
    let list = this.props.filtered.map(item => {
      return (
        <SearchResult
          key={item.id}
          title={item.title}
          author={item.author}
          profile={item.profile} />
          // clicked={() => this.postSelectedHandler(post.id)} />
      );
    });

    return (
      <div className={classes.SearchResults}>
        {list}
      </div>
    );
  }
}

export default SearchResults;
