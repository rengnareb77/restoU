import React from "react";

import Service from "./Service";
import Jour from "./Jour";

class Filtre extends React.Component {
  date = "2022-10-11";
  service = "Midi";

  render() {
    return (
      <div id="filtre">
        <Service />
        <Jour />
      </div>
    );
  }
}

export default Filtre;
