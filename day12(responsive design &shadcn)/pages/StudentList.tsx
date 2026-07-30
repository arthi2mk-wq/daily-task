import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function StudentList() {
  const defaultStudents = [
    {
      id: 1,
      name: "Arun",
      department: "CSE",
      rollno: "20",
      year: "4",
      email: "arun123@gmail.com",
      phone: "8903242312",
    },
    {
      id: 3,
      name: "Priya",
      department: "ECE",
      rollno: "12",
      year: "2",
      email: "priya123@gmail.com",
      phone: "34628765675",
    },
  ];

  const [students, setStudents] = useState(defaultStudents);

  useEffect(() => {
    const savedStudents = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    setStudents([...defaultStudents, ...savedStudents]);
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Student List
        </h2>

        {students.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <Card
                key={student.id || index}
                className="shadow-md hover:shadow-xl transition duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-center text-blue-700">
                    {student.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 ">
                  <p>
                    <span className="font-semibold">
                      Department:
                    </span>{" "}
                    {student.department}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Year:
                    </span>{" "}
                    {student.year}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Roll No:
                    </span>{" "}
                    {student.rollno}
                  </p>

                  <p className="break-words">
                    <span className="font-semibold">
                      Email:
                    </span>{" "}
                    {student.email}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Phone:
                    </span>{" "}
                    {student.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg">
            No Students Available
          </p>
        )}
      </div>
    </>
  );
}

export default StudentList;