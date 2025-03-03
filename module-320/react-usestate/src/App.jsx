import "./App.css";
import data from "./data/data";
import Counter from "./components/Counter";
import { useState, useRef } from "react";

function App() {
  // List of learners
  const [learners, setLearners] = useState(data);

  // New learner data
  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
  });

  const inputRef = useRef(null);
  console.log(inputRef);
  

  /**
   * Handle the Form onSubmit event
   *
   * @param {*} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLearner);
    
    // adds the new learner to the learners array
    setLearners([newLearner, ...learners]);
    // reset the form values
    setNewLearner({
      name: "",
      bio: "",
    });

    // focus back to the input element
    inputRef.current.focus();
  }

  return (
    <>
      <h1>React useState</h1>

      <Counter />

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={inputRef}
            value={newLearner.name}
            onChange={(e) =>
              setNewLearner({ ...newLearner, name: e.target.value })
            }
          />
        </label>

        <label>
          Bio:
          <input
            type="text"
            name="bio"
            value={newLearner.bio}
            onChange={(e) =>
              setNewLearner({ ...newLearner, bio: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {learners.map((learner, idx) => {
        return (
          <div key={idx}>
            <h3>{learner.name}</h3>
            <p>{learner.bio}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
