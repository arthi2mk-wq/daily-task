import { useState } from "react";
import Navbar from "../components/Navbar";

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function AddStudent() {
  const [name, setName] = useState("");
  const [rollno, setrollno] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setyear] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const [message, setMessage] = useState("");

  function addStudent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newstudent = {
      name,
      rollno,
      department,
      year,
      email,
      phone,
    };

    const existingStudents = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    existingStudents.push(newstudent);

    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    setMessage(`${name} (Roll No: ${rollno}) added successfully`);

    setName("");
    setrollno("");
    setDepartment("");
    setyear("");
    setemail("");
    setphone("");
  }
  const handlePhoneChange = (e) => {
  const value = e.target.value.replace(/[^0-9]/g, "");

  if (value.length <= 10) {
    setphone(value);
  }
}; 

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center py-10 px-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Add Student
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={addStudent} className="space-y-4">

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Student Name
                </label>

                <Input
                  id="name"
                  placeholder="Enter Student Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="rollno"
                  className="block text-sm font-medium mb-2"
                >
                  Roll Number
                </label>

                <Input
                  id="rollno"
                  placeholder="Enter Roll Number"
                  type="text"
                  value={rollno}
                  onChange={(e) => setrollno(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium mb-2"
                >
                  Department
                </label>

                <Input
                  id="department"
                  type="text"
                  placeholder="Enter Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium mb-2"
                >
                  Year
                </label>

                <Input
                  id="year"
                  placeholder="Enter Year"
                  type="number"
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>

                <Input id="phone" type="text" placeholder="Enter Phone Number" value={phone} onChange={handlePhoneChange} required />

              {phone.length > 0 && phone.length !== 10 && (
              <p className="text-red-500 text-sm">
              Phone number must be exactly 10 digits.
              </p>
                )}
              </div>

              <Button type="submit" className="w-full bg-blue-600 p-2">
                Add Student
              </Button>
            </form>

            {message && (
              <p className="text-green-600 text-center mt-5 font-medium">
                {message}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddStudent;
