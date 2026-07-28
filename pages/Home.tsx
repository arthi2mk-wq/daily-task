import Navbar from "../components/Navbar";



function Home(){

    return(
        <>
            <Navbar/>
            <div style={{ padding: '40px 30px',borderRadius: '8px',boxShadow: '0 2px 8px black',textAlign: 'center',border: '1px solid wheat',marginTop:'40px',height:'500px'
      }}>

            
            <h1 style={{ color: 'blue'}}>Student Information System</h1>

            <h2>
                Welcome to Student Management Portal
            </h2>

            <p style={{ color: 'grey' }}>
                Manage student details easily.Access profiles, view academic status, and register new enrollments seamlessly.
            </p>
            </div>

        </>
    )
}

export default Home;
