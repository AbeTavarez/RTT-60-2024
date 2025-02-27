import "./App.css";
import Learner from "./components/Learner";

import learnerData from "./data/learners";

import {useState} from 'react';
import ShowCount from "./components/ShowCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Fashion Blog</h1>

      <ShowCount count={count}/>

      {/* {arrOfLearners} */}

      {learnerData.map((item, index) => {
        return (
          <Learner
            key={index}
            name={item.name}
            age={item.age}
            lastLogin={item.lastLogin}
            style={{backgroundColor: 'black', color: "#fff"}}
            setCount={setCount}
          />
        );
      })}
    </div>
  );
}

export default App;
