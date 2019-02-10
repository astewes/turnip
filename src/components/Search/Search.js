import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Aux from "../../hoc/Aux/Aux";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: null,
      results: false,
      searching: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   filtered: this.props.items
    // });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.items.length > 0) {
  //     this.setState({
  //       filtered: nextProps.items
  //     });
  //   }
  // }

  handleChange = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, clear the filtered list
      this.setState( { filtered: null } );

      // newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    if (newList.length > 0) {
      this.setState( { filtered: newList, results: true } );
    }
  }

  render() {
    let searchResults = this.state.filtered ? <SearchResults filtered={this.state.filtered} /> : <p>No results to display.</p>;

    return (
      <Aux>
        <SearchBar changed={this.handleChange} />
        {searchResults}
      </Aux>
    );
  }
}

export default Search;
