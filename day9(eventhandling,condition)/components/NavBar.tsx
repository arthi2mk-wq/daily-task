import { Link } from "@tanstack/react-router";

function Navbar(){

    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>students information system</h2>
        <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{textDecoration:'none'}
            }>
                Home
            </Link>

            <Link to="/students" style={{textDecoration:'none' }}>
                Student List
            </Link>

            <Link to="/add" style={{textDecoration:'none' }}>
                Add Student
            </Link>
        </nav>
        </div>
    )
}

export default Navbar;
