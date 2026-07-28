import {useState} from "react";
import Navbar from "../components/Navbar";


function AddStudent(){

    const [name,setName] = useState("");
    const[rollno,setrollno]=useState("")
    const [department,setDepartment] = useState("");
    const [year,setyear]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")

    const [message,setMessage] = useState("");
    function addStudent(e){
        e.preventDefault();

        const newstudent={
            name,
            rollno,
            department,
            year,
            email,
            phone


        }
        console.log("New student created:",newstudent)
        setMessage(
            `${name} (Rollno:${rollno}) added successfully`
        );


        setName("");
        setDepartment("");
        setrollno("");
        setyear("");
        setemail("");
        setphone("");
    
    }


    return(
        <div>
        <Navbar/>
        <center>
        <div >
            <div >
        <h2 style={{marginTop:'50px'}}> Add Student</h2>
        <form onSubmit={addStudent} style={{display:'flex',flexDirection:"column",boxShadow:'0px 5px 5pxblack', height:"200px",width:'200px',gap:'15px'}}>
        <input  type="text" placeholder="Student Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input  type="text" placeholder="Student roll no" value={rollno} onChange={(e)=>setrollno(e.target.value)} required/>
        <input  type="text" placeholder="Student Department" value={department} onChange={(e)=>setDepartment(e.target.value)}/>
        <input  type="text" placeholder="Student year" value={year} onChange={(e)=>setyear(e.target.value)} required/>
        <input  type="text" placeholder="Student email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
        <input  type="text" placeholder="Student phoneno" value={phone} onChange={(e)=>setphone(e.target.value)}/>

        <button type="submit"  style={{ padding: "10px", backgroundColor: "blue", color: "white",  borderRadius: "4px", cursor: "pointer", marginTop:'10px'}}>
            Add Student
        </button>


        </form>


        {
            message && (
          <h3 style={{ color: "green", marginTop: "65px" }}>
            {message}
          </h3>
            )
        }
        </div>
         

</div>
</center>
</div>
    )

}

export default AddStudent;




  