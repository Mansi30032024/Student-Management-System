import { useState } from "react";

function App(){
  const [student, setStudent] = useState(null);

  //function to get Student data from Backend
  const getStudent = async ()=>{
    const response = await fetch('http://localhost:8080/student');
    const data = await response.json();
    setStudent(data);
  }
  return(
    <div>
      <button onClick={getStudent}>
        Fetch Student
      </button>
      <h1>{student?.name}</h1>
 {/* ? for safety  , if there is no value in it then it will be consider as empty else an error will be there
       If student exists (is not null or undefined), return student.name; otherwise, return undefined.
This prevents runtime errors like:

Cannot read properties of undefined (reading 'name')
The { ... } syntax is JSX’s way of embedding JavaScript expressions inside HTML-like code.
*/}
  <h1>{student?.id}</h1>
    </div>
  )
}
export default App;