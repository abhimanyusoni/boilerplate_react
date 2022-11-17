import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModelLayout = ({
  show,
  modelBody,
  modelTitle,
  modelFooter,
  handleClose,
}: any) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modelTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modelBody()}</Modal.Body>
        {modelFooter ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Yes
            </Button>
          </Modal.Footer>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
};

export default ModelLayout;
