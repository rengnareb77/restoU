import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';



class Liste extends React.Component {
    constructor(props) {
      super(props)
      
    }
    render() {
      return (
            <ListGroup as="ol" numbered>
              
              <ListGroup.Item action variant="dark">{this.props.nom}</ListGroup.Item>
              <ListGroup.Item action variant="dark">{this.props.nom}</ListGroup.Item>
              <ListGroup.Item action variant="dark">{this.props.nom}</ListGroup.Item>
              <ListGroup.Item action variant="dark">{this.props.nom}</ListGroup.Item>
              <ListGroup.Item action variant="dark">Dark</ListGroup.Item>
            </ListGroup>
       
  );
}
}

export default Liste;