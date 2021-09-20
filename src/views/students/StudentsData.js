import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  CardBody,
  Table
} from "reactstrap";

import PageLinks from "./PageLinks";

import { SearchStudents } from '../../services/graphql/client'


function StudentsData({ search, selectStudent, toDelete }) {

    const [offset, setOffset] = useState(0)
    const dataOffset = n => {
      let v = offset + n
      if(v >= 0){
       setOffset(v)
      }
    }

    const { loading, error, data } = SearchStudents(search, offset)

    if (loading) return <p>Loading...</p>;
  
    if (error) return <p>Error :(</p>;
    
    const { hasNextPage, hasPreviousPage } = data.students.pageInfo;
    
    let studentsList = data.students.nodes.map((el, index) => (
      <tr key={index}>
        <td>{el.cpf}</td>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>
          <Button size={'sm'} color="secondary" onClick={() => selectStudent(el)}>
             <FontAwesomeIcon icon={faEdit} />
          </Button>
          {' '}
          <Button size={'sm'} color="danger" onClick={() => toDelete(el)}>
             <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    ));
  
    return ( 
    <CardBody>  
    <Table responsive>
      <thead className="text-primary">
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         {studentsList} 
      </tbody>
    </Table>
    <div className="float-right">
      <PageLinks 
        hasNextPage={hasNextPage} 
        hasPreviousPage={hasPreviousPage} 
        toPrevious={() => dataOffset(-10)}
        toNext={() => dataOffset(10)}
      />
    </div>
  </CardBody>
  )}
  
  export default StudentsData;