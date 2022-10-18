import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FenetreModal from "./FenetreModal";

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
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
          <h4>Ajouter votre {this.props.nom}</h4>
          <FenetreModal />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class OpenModal extends React.Component {
  constructor(props) {
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
          nom={this.props.nom}
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
