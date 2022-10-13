import React from "react";

import Service from "./Service";
import Calendrier from "./Calendrier";

class Filtre extends React.Component {
  date = "2022-10-11";
  service = "Midi";

  render() { 
    return (
      <div id="filtre">
        <Service />
        <Calendrier />
      </div>
    );
  }
}

export default Filtre;
