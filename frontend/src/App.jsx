import { useState } from "react";

function App(){
  const [students, setStudents] = useState([]);
   const [count, setCount] = useState(0);
    const [name, setName] = useState("");
     const [course, setCourse] = useState("");

  //function to get Student data from Backend
  const getStudents = async ()=>{
    const response = await fetch('http://localhost:8080/students');
    const data = await response.json();
    console.log(data);
    setStudents(data);
  }

    const getBcaStudents = async ()=>{
    const response = await fetch('http://localhost:8080/students/bca');
    const data = await response.json();
    console.log(data);
    setStudents(data);
  }

  
    const fetchTotalStudentsCount= async ()=>{
    const response = await fetch('http://localhost:8080/students/count');
    const data = await response.json();
    console.log(data);
    setCount(data);
  }

  const addStudent= async ()=>{
    const response = await fetch('http://localhost:8080/students' , {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, course})
    });
    if(response.ok){
      alert("Student registered");
    }
    else{
      alert("Failed to reguster!");
    }
  }

  return(
    <div>
      <button onClick={getStudents}>
        Fetch Students
      </button>

      <button onClick={getBcaStudents}>
        Show BCA Students
      </button>
      
      <ul>
       {students.map(student=>(
        <li key={student.id}>
          {student.name} -  {student.course}
        </li>
       ))
       }
      </ul>

      <button onClick={fetchTotalStudentsCount}>Get Total Students Count</button>
      <p>Total students: {count} </p>

    <h1>Student Registration Form</h1>
    <input type="text"  placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
    <input type="text"  placeholder="Course" value={course} onChange={(e)=> setCourse(e.target.value)}/>
    
      <button onClick={addStudent}>Register</button>


    </div>
  )
}
export default App;

    {/* 
      <h1>{student?.name}</h1>
      <h1>{student?.id}</h1>

 ? for safety  , if there is no value in it then it will be consider as empty else an error will be there
       If student exists (is not null or undefined), return student.name; otherwise, return undefined.
This prevents runtime errors like:

Cannot read properties of undefined (reading 'name')
The { ... } syntax is JSX’s way of embedding JavaScript expressions inside HTML-like code.
 */}