
import * as STUDENT_MUTATIONS from './students/mutations'
import * as STUDENT_QUERY from './students/query'






export const QUERY = {
 ...STUDENT_MUTATIONS,
 ...STUDENT_QUERY
}
