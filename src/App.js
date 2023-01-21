
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import ALLState from './context/authState';
import Home from './components/Home';
import GraphArea from './components/GraphArea';
import Dashboard from './components/Dashboard';
function App() {




  return (
    <div className="App">
      <ALLState>
        <Router>
          <div className="navArea" >
            <Navbar />

          </div>


          <div className="display-content">

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/fullchart' element={<GraphArea />} />


            </Routes>
          </div>
        </Router >
      </ALLState>
    </div>


  );
}

export default App;
