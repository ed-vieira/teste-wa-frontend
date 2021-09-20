import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Row,
  Col,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from "reactstrap";
import { DeleteStudent } from '../../../services/graphql/client'


const ConfirmDelete = ({ student, isOpen, closeModal }) => {

    const [modal, setModal] = useState(isOpen);
    
    const close = () => {
        closeModal()
        setModal(false)
    } 
    
    const [DeleteOneStudent, { data,  error }] = DeleteStudent();

    useEffect( () => {
       setModal(isOpen)
       if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
    },[student, isOpen, data, error])
    
    const deleteAction = async id => {
        DeleteOneStudent({ variables: { id } });
        close()
    };



    return (<>
    <Modal size='md' isOpen={modal} toggle={close} className="warning" keyboard>
       <ModalHeader toggle={close}>Remover </ModalHeader>
        <ModalBody>  
            <Row>
              <Col className="pr-1" md="10">
                <p className="text-danger">Remover <u>{student.name}</u>?</p>
              </Col>
            </Row>
      </ModalBody> 
      <ModalFooter>
          <Button size={'md'} onClick={() => deleteAction(student.id)} 
            color="danger" >
              <FontAwesomeIcon icon={faTrash} /> Remover
          </Button>
      </ModalFooter>
    </Modal>  
    </>)
} 


export default ConfirmDelete
