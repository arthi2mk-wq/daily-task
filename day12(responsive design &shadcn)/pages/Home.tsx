import Navbar from "../components/Navbar";
import { Link } from "@tanstack/react-router";
import bg from "../assets/bg.png";
import students from "../assets/students.png";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-4 md:p-8">

        {/* Banner Section */}
        <Card className="mb-10 shadow-lg border-0 bg-blue-100">
          <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 md:p-10">

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
                Student Information System
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Welcome to Student Management Portal
              </h2>

              <p className="text-gray-600 leading-7">
                Manage student details easily.
                <br />
                Store, update and organize all student records
                in one secure place.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={bg}
                alt="Student"
                className="w-72 md:w-[500px]"
              />
            </div>

          </CardContent>
        </Card>

        {/* Add Student Section */}
        <Card className="shadow-lg">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-8">

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={students}
                alt="Students"
                className="w-64 md:w-80"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">
                Add New Students
              </h2>

              <p className="text-gray-600 mb-8 leading-7">
                Easily register students and manage their
                information.
                <br />
                Keep all student records organized and
                accessible in one place.
              </p>

              <Link to="/add">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Add Student
                </Button>
              </Link>
            </div>

          </CardContent>
        </Card>

      </div>
    </>
  );
}

export default Home;