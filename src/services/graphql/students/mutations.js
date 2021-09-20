import { gql } from "@apollo/client";


export const CREATE_STUDENT = gql`
mutation CreateOneStudent($cpf: String, $email: String, $name: String) {
  createOneStudent(
  input: {
    student:{
      cpf: $cpf,
      email: $email,
      name: $name, 
    }
  }
){
  cpf
  email
  name
}
}`;


export const UPDATE_STUDENT = gql`
mutation UpdateOneStudent($id: ID!, $cpf: String, $email: String, $name: String) {
  updateOneStudent(
  input: {
    id: $id
    update:{
      cpf: $cpf,
      email: $email,
      name: $name, 
    }
  }
){
  id
  cpf
  email
  name
}
}`;


export const DELETE_STUDENT = gql`
mutation DeleteOneStudent($id: ID!) {
  deleteOneStudent(input: {id: $id}){
    id
    cpf
    name
    email
  }
}`;  
