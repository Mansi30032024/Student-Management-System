function StudentCard(props) {
  const { name, course } = props;
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        height: "200px",
      }}
    >
      <h1>Welcome</h1>
      <h2>Student Card</h2>
      <p>{name}</p>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;
