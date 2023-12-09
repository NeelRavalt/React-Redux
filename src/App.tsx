import {Create} from "./Components/Create";

 import Read from "./Components/Read"
import {  Routes, Route } from 'react-router-dom';
import Navebar from "./Components/Navebar";

function App() {

  return (
    <>
   <Navebar/>
    <div className='container'>

    <Routes>
  <Route path="Read" element={<Read/>}></Route>
  <Route path="/" element={<Create/>}></Route>
</Routes>

    </div>
    </>
  )
}

export default App
