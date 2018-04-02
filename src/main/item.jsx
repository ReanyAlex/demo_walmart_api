import React from 'react';
import { ListGroupItem, Image, Well } from 'react-bootstrap';

export default props => {
  return (
    <ListGroupItem>
      <Image style={{ width: '10%', display: 'inline-block' }} src={props.item.thumbnailImage} thumbnail />
      <Well style={{ width: '85%', display: 'inline-block', marginLeft: '3%' }}>
        <span>Items Name: {props.item.name}</span>
        <span style={{ float: 'right' }}>Price: ${props.item.salePrice}</span>
      </Well>
    </ListGroupItem>
  );
};
