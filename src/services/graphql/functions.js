import { useQuery, useMutation } from "@apollo/client";
import { QUERY } from "./query"  



export const refetchSearch = [ QUERY.SEARH_STUDENTS, 'SearchStudents', {
    variables: {
      search: `%''%`,
      offset: 10,
    }
}]


export const ListStudents = () => {
  return useQuery(QUERY.LIST_STUDENTS);
} 


export const SearchStudents = (search, offset) => {
    
    return useQuery(QUERY.SEARH_STUDENTS, {
        variables: { 
            search: `%${search}%`,
            offset: offset,
            limit: 10,
        }
    });
}


export const FindStudent = Id => {
    return useQuery(QUERY.FIND_STUDENT, {
        variables: { Id }
    });
}


export const CreateStudent = () => {
    return useMutation(QUERY.CREATE_STUDENT, {
        refetchQueries: refetchSearch
    });
} 


export const UpdateStudent = () => {
    return useMutation(QUERY.UPDATE_STUDENT);
}


export const DeleteStudent = () => {
    return useMutation(QUERY.DELETE_STUDENT, {
        refetchQueries: refetchSearch
    });
} 


