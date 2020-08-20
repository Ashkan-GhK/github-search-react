import React, { Component } from 'react';
import Navbar from './componnents/layout/Navbar';
import './App.css';
import Users from './componnents/users/Users';
import axios from 'axios';
import Search from './componnents/users/Search';
import { Alert } from './componnents/layout/Alert';


class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get
    (`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from state

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type}});

    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    const { users, loading } = this.state;


    return (
      <div className="App">
        <Navbar title="Github Search" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={
            this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
            />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }

}

export default App;