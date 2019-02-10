import React, { Component } from "react";
import Search from "./components/Search/Search";
import Aux from "./hoc/Aux/Aux";
import axios from "./axios-instance";
import headerImg from "./assets/images/header.jpg";
import resultImg from "./assets/images/ivanka_trump.jpg";
import classes from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
      // list: ["Go to the store", "Wash the dishes", "Learn some code"]
    };
  }

  componentDidMount() {
    axios.get("/posts").then(response => {
      const list = response.data.slice(0, 4);
      const updatedPosts = list.map(item => {
        return {
          ...item,
          author: "Ivanka Trump",
          profile: resultImg
        };
      });
      this.setState({ list: updatedPosts });
      // this.setState({ list: updatedPosts });
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <header>
            <div>
              <nav>
                <li><a href="/">Alphabetical List</a></li>
                <li><a href="/">Contact</a></li>
              </nav>
              <img src={headerImg} alt="Home" />
            </div>
        </header>
        <main>
          <Search items={this.state.list} />
        </main>
      </div>
    );
  }
}

export default App;
