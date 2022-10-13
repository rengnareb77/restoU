import React from "react";
import "../index.css";
import Button from 'react-bootstrap/Button';


class MenuBtn extends React.Component {
  render() {
    return (
     <div>
        <Button variant="primary">{this.props.name}</Button>
     </div>
        
    );
  }
}
export default MenuBtn;
