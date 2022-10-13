import React from "react";
import "../index.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

class MenuDeroulant extends React.Component {
/*
  constructor(props) {
    super(props);
    this.state = {
            nomRu : this.props
    };
  };
*/
  render() {
    
    return (
                <div>
                    <NavDropdown.Item href="#action/3.4" >
                      {this.props.name}                  
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                </div>
                    
                    
    );
  }
}
export default MenuDeroulant;
