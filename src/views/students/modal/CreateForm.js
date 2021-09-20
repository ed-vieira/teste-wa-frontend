import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from "reactstrap";
import { CreateStudent } from '../../../services/graphql/client'


const CreateForm = () => {

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [CreateOneStudent, { data,  error }] = CreateStudent();


    useEffect( () => {
        if (error) {
           console.error(error);
         } else {
           console.log(data);
         }
     },[ data, error])

    const createAction = async ({ name, email, cpf }) =>  {

        CreateOneStudent({
          variables: {
            cpf,
            name,
            email,
          }
        });

        setModal(false)
   };


    return (<>
      <Button color="primary" onClick={toggle}>
        <FontAwesomeIcon icon={faSave} /> {'Novo'}
      </Button>
      <Modal size='md' isOpen={modal} toggle={toggle} className="warning" backdrop={'static'} keyboard>
       <ModalHeader toggle={toggle}>{'Cadastrar Aluno'} </ModalHeader>
       <Form onSubmit={e => e.preventDefault()}>
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
          <Button onClick={() => createAction({ email, name, cpf })}  
          color="primary" >Salvar</Button>
      </ModalFooter>
      </Form>
    </Modal>  
    </>)
} 

const style = {
    marginTop: '2%'
}

export default CreateForm
