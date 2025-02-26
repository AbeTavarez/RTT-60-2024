import "./App.css";
import Article from "./components/Article";
import Learner from "./components/Learner";

import learnerData from './data/learners';

import image from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-1.jpg";

function App() {
  return (
    <div>
      <h1>Fashion Blog</h1>

    {
      learnerData.map((item, index) => (
        <Learner
        key={index}
        name={item.name}
        age={item.age}
        lastLogin={item.lastLogin}
         />
      ))
    }
      
    </div>
  );
}

export default App;
