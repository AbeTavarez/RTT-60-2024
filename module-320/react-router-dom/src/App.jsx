import Main from "./pages/Main";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>App Router</h1>

      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
