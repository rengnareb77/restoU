import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FenetreModal from "./FenetreModal";

type Props = {
  onHide:()=> void
  show:boolean 
}

type Props2={
}
interface State {
  modalShow:boolean

}

class MyVerticallyCenteredModal extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props)
    
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Ajouter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ajouter votre (Entré, plat, dessert)</h4>
          <FenetreModal />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class OpenModal extends React.Component<Props2,State> {
  constructor(props:Props2) {
    super(props);
    this.state = { modalShow: false };
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() =>
            this.setState((prevState) => {
              return { modalShow: true };
            })
          }
        >
          Ajouter
        </Button>

        <MyVerticallyCenteredModal 
          show={this.state.modalShow}
          onHide={() =>
            this.setState((prevState) => {
              return { modalShow: false };
            })
          }
        />
      </>
    );
  }
}

export default OpenModal;
