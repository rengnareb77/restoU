import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Service extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      Service: "",
    }*/
  }

  onChangeValue(event) {
    //alert(event.target.attributes.getNamedItem("data-key").value);
    const selection = event.target.attributes.getNamedItem("data-key").value;
  }

  render() {
    return (
      <div id="service">
        <div id="radio-service">
          <ButtonGroup onClick={this.onChangeValue.bind(this)} className="mb-2">
            <Button variant="primary" data-key="Midi">
              Midi
            </Button>
            <Button variant="primary" data-key="Soir">
              Soir
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Service;
