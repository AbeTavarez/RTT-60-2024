/* eslint-disable react/prop-types */


function Learner(props) {
  console.log(props);

  props.setCount(100);
  

  return (
    <div style={props.style}>
      <h2>Name: {props.name}</h2>

      <h3>Age: {props.age}</h3>

      <h4>Last Login: {props.lastLogin}</h4>

      <hr />
    </div>
  );
}

export default Learner;
