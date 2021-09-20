import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

  const AppModal = ({
    buttonLabel,
    content,
    title,
    className
  }) => {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>     
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal size='md' isOpen={modal} toggle={toggle} className={className} backdrop={'static'} keyboard>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
         {content}
      </Modal>
    </div>
  );
}

export default AppModal;