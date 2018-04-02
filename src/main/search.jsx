import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class Search extends Component {
  render() {
    return (
      <Form
        style={{ marginTop: '4%' }}
        inline
        onSubmit={e => {
          e.preventDefault();
          //this.props.handleSubmit();
        }}
      >
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search the API</ControlLabel>{' '}
          <FormControl
            type="text"
            value={this.props.search}
            placeholder="Enter text"
            onChange={e => this.props.onChange(e.target.value)}
          />
        </FormGroup>
        {/* <Button type="submit">Search</Button> */}
      </Form>
    );
  }
}
