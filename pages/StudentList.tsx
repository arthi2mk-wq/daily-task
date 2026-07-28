import {useState} from "react";
import Navbar from "../components/Navbar";


function StudentList(){

    const [students,setStudents] = useState([
        {
            id:1,
            name:"Arun",
            department:"CSE",
            rollno:"20",
            year:"4",
            email:"arnum123@gmail.com",
            phone:"8903242312"

        },
        {
            id:2,
            name:"Priya",
            department:"ECE",
            rollno:"12",
            year:"2",
            email:"priya123@gmail.com",
            phone:'34628765675'

        }
    ]);


    return(
        <>
        <Navbar/>

        <h2>
            Student List
        </h2>

<div>
        {
            students.length > 0 ?

            students.map((student)=>(

                <div key={student.id}  style={{display:'flex',flexDirection:'column',width:'300px',margin:'10px', height:'250px',boxShadow:'0px 0px 5px black',marginTop:'30px',marginLeft:'400px'}}>

                    <p>
                        Name : {student.name}
                    </p>

                    <p>
                        Department : {student.department}
                    </p>
                    <p>
                        year : {student.year}
                    </p>
                    <p>
                        rollno : {student.rollno}
                    </p>
                    <p>
                        email : {student.email}
                    </p>
                    <p>
                        phone : {student.phone}
                    </p>

                </div>

            ))

            :

            <p>
                No Students Available
            </p>
        }
        </div>



        </>
    )
}

export default StudentList;