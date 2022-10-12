import React from "react";
import OpenModal from "./MyVerticallyCenteredModal";

class Entre_plat_dessert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: props.nom };
  }

  render() {
    return (
      <>
        <label>{this.state.nom}</label>

        <OpenModal />
      </>
    );
  }
}

export default Entre_plat_dessert;
