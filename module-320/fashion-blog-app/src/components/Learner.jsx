/* eslint-disable react/prop-types */


function Learner({name, age, lastLogin, enrolledCourses, style, setCount}) {
  return (
    <div style={style}>
      <h2>Name: {name}</h2>

      <h3>Age: {age}</h3>

      <h4>Last Login: {lastLogin}</h4>

      <div>
        <h3>Enrolled Courses</h3>
        {
            enrolledCourses.map((course, idx) => <h4 key={idx}>{course}</h4>)
        }
      </div>
        <button onClick={() => setCount(100)}>Add count</button>
      <hr />
    </div>
  );
}

export default Learner;
