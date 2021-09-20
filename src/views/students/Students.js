import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  CardBody,
} from "reactstrap";

import { ApolloProvider, Client } from '../../services/graphql/client'
import StudentsData from './StudentsData'
import SearchForm from "./SearchForm";
import CreateForm from "./modal/CreateForm";
import UpdateForm from "./modal/UpadateForm";
import ConfirmDelete from "./modal/ConfirmDelete";
import $ from 'jquery'

function Students() {
  
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isToDelete, setIsToDelete] = useState(false)
  const [student, setStudent] = useState({})

  const selectStudent = el => {
    setStudent(el) 
    setIsOpen(true)
  }

  const deleteStudent = el => {
    setStudent(el) 
    setIsToDelete(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const closeDeleteModal = () => {
    setIsToDelete(false)
  }


  return (
    <>
    <ApolloProvider client={Client} >
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4"></CardTitle>
                <p className="card-category">
                  Lista de alunos
                </p>
              </CardHeader>
              <CardBody>
              <Row>
                <Col md="8">
                  <SearchForm getSearch={search => setSearch(search)} />
                </Col>
                <Col md="4">
                <div className="float-right" >
                  <CreateForm />
                  <UpdateForm student={student} isOpen={isOpen} closeModal={() => closeModal()} />
                  <ConfirmDelete student={student} 
                    isOpen={isToDelete} 
                    closeModal={() => closeDeleteModal()}
                  />
                </div>
                </Col>  
              </Row> 
              <StudentsData
                search={search} 
                selectStudent={student => selectStudent(student)} 
                toDelete={student => deleteStudent(student)}
              />
              </CardBody>  
            </Card>
          </Col>
        </Row>        
      </div>
      </ApolloProvider>
    </>
  );
}

export default Students;






