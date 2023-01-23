import React from "react";
import { Modal } from "react-bootstrap";

const ModalView = ({ onHide, show, selectedImage }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img alt="selectedImage" src={selectedImage} className="h-100 w-100" />
      </Modal.Body>
    </Modal>
  );
};

export default ModalView;
