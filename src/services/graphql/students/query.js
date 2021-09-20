import { gql } from "@apollo/client";



export const FIND_STUDENT = gql`
query FindStudent($Id: id) {
 student(id: $Id) {
    id
    name
    email
    cpf     
 }
}`;



export const LIST_STUDENTS = gql`
  query ListStudents {
  students (
    sorting: [{
      field: name 
      direction: ASC
    }]
  ) {
    
    pageInfo {
     hasNextPage
     hasPreviousPage
    }
    
    nodes {
      id
      name
      email
      cpf
    }
 }
}
`;


export const SEARH_STUDENTS = gql`
query SearchStudents($search: String, $offset: Int) {
students (
    filter: {
      or: [
        { name: { iLike: $search } },
        { email: { iLike: $search} },
        { cpf: { like: $search } },
      ],
    }

    sorting: [{
      field: name 
      direction: ASC
    }]

    paging: {
      limit:10,
      offset: $offset
    }
) {
pageInfo {
 hasNextPage
 hasPreviousPage
}

nodes {
  id
  name
  email
  cpf
}

}
}`;
