import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

import Item from './item';

export default class ItemHolder extends Component {
  state = {
    items: {}
  };

  //-- as we type the search input
  fetchAWS() {
    const AWSURL = 'https://roxw1ragm7.execute-api.us-east-1.amazonaws.com/dev';
    const { search } = this.props;

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

  // componentDidMount() {
  //   if (this.props.search === '') {
  //     return;
  //   }
  //   this.fetchAWS();
  // }

  // prevents continous update, api calls
  shouldComponentUpdate(nextProps, nextState) {
    //intial load when data doesn't exist
    if (this.state.items[0] === undefined) {
      return true;
    }
    //prevents endless api calling/ loop
    if (nextProps.search === this.props.search && this.state.items[0].itemId === nextState.items[0].itemId) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items[0] === undefined) {
      this.fetchAWS();
      return;
    }

    if (prevState.items[0].itemId === this.state.items[0].itemId) {
      this.fetchAWS();
      return;
    }
  }
  //--

  generateList() {
    //for as we type into the search field
    if (Object.keys(this.state.items).length === 0 && this.state.items.constructor === Object) {
      return <span>Search for items</span>;
    }
    return <ListGroup>{this.state.items.map(item => <Item key={item.itemId} item={item} />)}</ListGroup>;
    //----
    //for search button
    // if (Object.keys(this.props.items).length === 0 && this.props.items.constructor === Object) {
    //   return <span>Search for items</span>;
    // }
    // return <ListGroup>{this.props.items.map(item => <Item key={item.itemId} item={item} />)}</ListGroup>;
    //----
  }

  render() {
    return (
      <div style={{ width: '60%', margin: '0 auto' }}>
        <h1>Item Holder</h1>
        {this.generateList()}
      </div>
    );
  }
}
