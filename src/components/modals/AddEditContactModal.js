import { React } from "react";
import { Modal } from "react-bootstrap";

function AddEditContactModal(props) {
  return (
    <>
      <Modal show={props.showState} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default AddEditContactModal;
