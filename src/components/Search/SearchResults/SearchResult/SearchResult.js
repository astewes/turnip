import React from 'react';
import classes from './SearchResult.module.scss';

const searchResult = (props) => (
  <div className={classes.SearchResult}>
    <img src={props.profile} alt="props.author" />
    <div>
      <p><span>{ props.author }</span></p>
      <p>{ props.title }</p>
    </div>
  </div>
);

export default searchResult;
