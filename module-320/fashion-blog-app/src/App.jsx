import "./App.css";
import Learner from "./components/Learner";

import learnerData from "./data/learners";

import {useState} from 'react';
import ShowCount from "./components/ShowCount";

import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h1>Fashion Blog</h1>

      <ShowCount count={count}/>

      {/* {arrOfLearners} */}

      {learnerData.map((item, index) => {
        return (
          <Learner
            key={index}
            {...item}
            style={{backgroundColor: "black", color: "#fff"}}
            setCount={setCount}
          />
        );
      })}
    </Container>
  );
}

export default App;
