/**
 */
const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <strong>
          total of {course.parts.reduce((acc, cur) => acc + cur.exercises, 0)}{" "}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Course;
