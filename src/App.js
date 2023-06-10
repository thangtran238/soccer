import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign_up from './components/Sign_up';
import Sign_in from './components/Sign_in';
function App() {
  return (
    <>
     <Router>
        
        <Routes>

          <Route path="*" element={<Content/>} />
          <Route exact path="Sign_up" element={<Sign_up />} />
          <Route exact path="Sign_in" element={<Sign_in />} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
