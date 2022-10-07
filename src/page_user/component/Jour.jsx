import React from "react";

import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

import Button from "react-bootstrap/Button";

class Jour extends React.Component {


  render() {
    return (
      <div>
        <Calendrier />
      </div>
    );
  }
}

const Calendrier = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        06/10/22
      </Button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(2022, 8, 8)}
        minDate={new Date(2022, 10, 10)}
        maxDate={new Date(2023, 0, 10)}
        headerFormat="DD, MM dd"
        colorScheme="blue"
      />
    </div>
  );
};

export default Jour;
