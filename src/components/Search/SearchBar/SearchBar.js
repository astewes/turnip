import React from 'react';
import classes from './SearchBar.module.scss';

const searchBar = (props) => (
  <div className={classes.SearchBar}>
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={props.changed} />
    </div>
  </div>
);

export default searchBar;
