import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <div className="bg-blue-600 px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-white text-2xl font-bold mb-4 md:mb-0">
          StudentCare
        </h2>

        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <Link
            to="/"
            className="text-white hover:text-yellow-200"
          >
            Home
          </Link>

          <Link
            to="/students"
            className="text-white hover:text-yellow-200"
          >
            Student List
          </Link>

          <Link
            to="/add"
            className="text-white hover:text-yellow-200"
          >
            Add Student
          </Link>
        </nav>

      </div>
    </div>
  );
}

export default Navbar;