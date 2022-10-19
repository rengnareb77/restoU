import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Liste from './Liste';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Liste d'aliments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Liste/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Listechoix() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}


export default Listechoix;