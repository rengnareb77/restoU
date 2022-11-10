import React from "react";

class Boutton extends React.Component {
  render() {
    return (
      <button type="submit" onClick={this.props.onClick}>
        {this.props.texte}
      </button>
    );
  }
}
export default Boutton;
