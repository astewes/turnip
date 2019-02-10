import React, { Component } from 'react';
import axios from '../../axios-instance';

class Profile extends Component {
    state = {
        loadedProfile: null
    };

    // needed to getting data when the single post is initially loaded
    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    // needed for subsequent requests
    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id) {
          if (!this.state.loadedProfile || (this.state.loadedProfile && this.state.loadedProfile.id !== this.props.match.params.id)) {
            // ONLY send if we've actually loaded a new post
            axios.get('/posts/' + this.props.match.params.id)
            .then(response => {
              this.setState({loadedProfile: response.data})
            });
          }
        }
      }

    render () {
        let profile;

        if (this.state.loadedProfile) {
            profile = (
                <div className="Profile">
                    <h1>{this.state.loadedProfile.title}</h1>
                    <p>{this.state.loadedProfile.body}</p>
                </div>
            );
        }
          return profile;
    }
}

export default Profile;