import React from "react";
import OpenModal from "./MyVerticallyCenteredModal";

type Props = {
  nom:string
}

interface State {
  nom:string
}

class Entre_plat_dessert extends React.Component<Props,State> {
  constructor(props:Props) {
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
