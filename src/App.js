import Register from './Register';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <main className="App">
        <Router>
     
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Register" element={<Register/>} />
       <Route path="/Login" element={<Login/>} />



     </Routes>
     
     </Router>  
    </main>
  );
}

export default App;