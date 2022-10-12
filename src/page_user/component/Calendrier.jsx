import React from "react";

import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

import Button from "react-bootstrap/Button";

class Calendrier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          {this.state.date.toDateString()}
        </Button>
        <DatePicker
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}          
          onChange={(e) => this.setState({ date: e, isOpen: false })}
          defaultValue={this.state.date}
          minDate={new Date(2022, 9, 10)}
          maxDate={new Date(2023, 0, 10)}
          headerFormat="DD, MM dd"
          colorScheme="blue"
        />
      </div>
    );
  }
}

export default Calendrier;
