import './App.css'
import HomePage from './components/HomePage/HomePage'
import Payload from './components/Payload'

function App() {
  
  let openPortal = true;
  
  return (
    <>
      {openPortal && <Payload />}
      <HomePage />
    </>
  )
}

export default App
