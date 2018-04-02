import React, { Component } from 'react';
//--
import axios from 'axios';
//--
import Header from './main/header';
import ItemHolder from './main/itemHolder';

class Container extends Component {
  state = {
    search: '',
    items: {}
  };
  /*
  //----- search button
  fetchAWS() {
    const AWSURL = 'https://roxw1ragm7.execute-api.us-east-1.amazonaws.com/dev';
    const { search } = this.state;

    const object = { search };
    //prevents searching for nothing
    if (search === '') {
      return;
    }
    axios
      .post(AWSURL, object)
      .then(response => {
        let { items } = response.data;
        //if for some reason no data is in the response and it isn't caught then set to empty object
        if (items === undefined) {
          items = {};
        }
        this.setState({ items });
      })
      .catch(err => console.error(err));
  }

  handleSubmit(e) {
    this.fetchAWS();
  }
  //----
  */

  onChange(search) {
    this.setState({ search });
  }

  render() {
    return (
      <div>
        <Header
          onChange={this.onChange.bind(this)}
          search={this.state.search}
          //handleSubmit={this.handleSubmit.bind(this)}
        />
        <ItemHolder search={this.state.search} items={this.state.items} />
      </div>
    );
  }
}

export default Container;
