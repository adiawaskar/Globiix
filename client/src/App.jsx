import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'; 
import Dashboard from './pages/Dashboard'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// <Route path="/" element={<Landing />} />