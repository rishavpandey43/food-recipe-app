import React from "react";
import { Modal } from "react-bootstrap";

export default function SingleRecipe(props) {
  return (
    <div>
      <Modal show={props.toggleModal} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );

}
