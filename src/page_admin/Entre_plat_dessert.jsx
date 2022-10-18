import React from "react";
import OpenModal from "./MyVerticallyCenteredModal";

class Entre_plat_dessert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <label>{this.props.nom}</label>
      
        <OpenModal nom={this.props.nom.toLowerCase()}/>
      </>
    );
  }
}

export default Entre_plat_dessert;
