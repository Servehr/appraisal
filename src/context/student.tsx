import { AllStudentType } from "../type/abstraction/AllStudentType"
import { AllStudentTypeAbstract } from "../type/AllStudentTypeAbstract"

export const Student = (props: AllStudentTypeAbstract) => 
{   
    return (
        <div>
            {
                props.allStudent.map((student) => {
                    return <h3 key={student.firstname}>{student.firstname} {student.surname}</h3>
                })   
            }
        </div>
    )
}