import React, { useState, useEffect } from "react";
import {
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  ModalBody, 
  ModalFooter,
  Modal, 
  ModalHeader
} from "reactstrap";
import { UpdateStudent } from '../../../services/graphql/client'


const UpdateForm = ({ student, isOpen, closeModal }) => {

    const [id, setId] = useState(student.id);
    const [cpf, setCpf] = useState(student.cpf);
    const [name, setName] = useState(student.name);
    const [email, setEmail] = useState(student.email);
    const [modal, setModal] = useState(isOpen);
   
    const close = () => {
        closeModal()
        setModal(false)
    } 
    
    const [UpdateOneStudent, { data,  error }] = UpdateStudent();

    useEffect( () => {
       setId(student.id);
       setCpf(student.cpf);
       setName(student.name);
       setEmail(student.email);
       setModal(isOpen)
       if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
    },[student, isOpen, data, error])
    


   const updateAction = async ({id, name, email, cpf}) =>  {

        UpdateOneStudent({
          variables: {
            id,   
            cpf,
            name,
            email,
          }
        });

        close()
    };



    return (<>
    <Modal size='md' isOpen={modal} toggle={close} className="warning" backdrop={'static'} keyboard>
       <ModalHeader toggle={close}>Editar </ModalHeader>
        <ModalBody>  
            <Row>
                <Col className="pr-1" md="10">
                    <FormGroup>
                        <Input style={style}
                            onChange={e => setCpf(e.target.value)}
                            placeholder="CPF"
                            type="text"
                            value={cpf}

                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="10">
                    <FormGroup>
                        <Input style={style}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                            type="text"
                            value={name}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="pr-1" md="10">
                    <FormGroup>
                        <Input style={style}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="E-mail:"
                            type="text"
                            value={email}
                        />
                    </FormGroup>
                </Col>
            </Row>
      </ModalBody> 
      <ModalFooter>
          <Button onClick={() => updateAction({ id, email, name, cpf })} 
            color="primary" >Salvar</Button>
      </ModalFooter>
    </Modal>  
    </>)
} 

const style = {
    marginTop: '2%'
}

export default UpdateForm
