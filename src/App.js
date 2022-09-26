import {Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Verify from './components/Verify';

function App() {
  return (
       <>
       <Routes>
         <Route path="/" element={<Register/>}/>
         <Route path="/verify" element={<Verify/>}/>
       </Routes>
       </>
  );
}

export default App;
