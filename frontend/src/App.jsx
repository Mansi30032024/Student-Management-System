import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  // const [students, setStudents] = useState([]);
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  // const [course, setCourse] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // //function to get Student data from Backend
  // const getStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students");
  //   const data = await response.json();
  //   console.log(data);
  //   setStudents(data);
  // };

  // const getBcaStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students/bca");
  //   const data = await response.json();
  //   console.log(data);
  //   setStudents(data);
  // };

  // const fetchTotalStudentsCount = async () => {
  //   const response = await fetch("http://localhost:8080/students/count");
  //   const data = await response.json();
  //   console.log(data);
  //   setCount(data);
  // };

  // const addStudent = async () => {
  //   const response = await fetch("http://localhost:8080/students", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, course }),
  //   });
  //   if (response.ok) {
  //     alert("Student registered");
  //   } else {
  //     alert("Failed to reguster!");
  //   }
  // };

  // const login = async () => {
  //   const response = await fetch("http://localhost:8080/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });

  //   alert("Login Successful");
  // };

  // const loginWithGoogle = () => {
  //   window.location.href = "http://localhost:8080/oauth2/authorization/google";
  // };

  {
    /* return (
    <div>
  <button onClick={getStudents}>Fetch Students</button>

      <button onClick={getBcaStudents}>Show BCA Students</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>

      <button onClick={fetchTotalStudentsCount}>
        Get Total Students Count
      </button>
      <p>Total students: {count} </p>

      <h1>Student Registration Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={addStudent}>Register</button>
      <br />
      <hr />
      <input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>

      <hr />
      <br />
      <button onClick={loginWithGoogle}>Login with Google</button>
      </div>
       */
  }

  // return (
  //   <div>
  //     <StudentCard name="Karan" course="BCA" />
  //     <StudentCard name="Raj" course="MCA" />
  //     <StudentForm />
  //   </div>
  // );

  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const response = await fetch("http://localhost:8080/students");
    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Student Management System</h1>

      <StudentForm refreshStudents={fetchStudents} />

      <hr />

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
        />
      ))}
    </div>
  );
}
export default App;

{
  /* 
      <h1>{student?.name}</h1>
      <h1>{student?.id}</h1>

 ? for safety  , if there is no value in it then it will be consider as empty else an error will be there
       If student exists (is not null or undefined), return student.name; otherwise, return undefined.
This prevents runtime errors like:

Cannot read properties of undefined (reading 'name')
The { ... } syntax is JSX’s way of embedding JavaScript expressions inside HTML-like code.
 */
}
