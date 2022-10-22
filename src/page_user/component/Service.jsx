import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


class Service extends React.Component {

  constructor(props) {
    super(props);//Props: date,

    this.state = {
      val: ( ( (this.props.date.getHours() * 100) + (this.props.date.getMinutes()) ) > 1400) ? "Soir" : "Midi",
      //S'il est 14 heures passées alors le menu du soir est affiché, sinon celui du midi.
    };
  }

  onChangeValue(event) {
    this.setState({ val: event });
    //alert(event); //debug
  }

  render() {
    return (
      <div id="service">
        <div id="dropdown-service">
          <DropdownButton
            id="dropdown-basic-button"
            title={this.state.val}
            onSelect={this.onChangeValue.bind(this)}
          >
            <Dropdown.Item eventKey="Midi">Midi</Dropdown.Item>
            <Dropdown.Item eventKey="Soir">Soir</Dropdown.Item>
          </DropdownButton>
          
        </div>
      </div>
    );
  }
}

export default Service;
