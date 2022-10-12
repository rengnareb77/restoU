import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "Midi"
    };
  }

  onChangeValue(event) {
    this.setState({ val: event });
    //alert(event);
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
