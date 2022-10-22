import React from "react";

import Service from "./Service";
import Calendrier from "./Calendrier";

class Filtre extends React.Component {
  //service = "Midi";

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }
  

  render() { 
    return (
      <div id="filtre">
        <Service date={this.state.date} />
        <Calendrier date={this.state.date} />
      </div>
    );
  }
}

export default Filtre;
