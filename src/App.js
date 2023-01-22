
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import ALLState from './context/authState';
import Home from './components/Home';
import About from './components/About'
import GraphArea from './components/GraphArea';
import Dashboard from './components/Dashboard';
import GetNews from './components/GetNews';
import Contact from './components/Contact';
import { Chart } from 'chart.js';
import Login from './components/login';
import SignUp from './components/SignUp';
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
              {/* <Route exact path='/' element={<Home />} /> */}
              <Route exact path='/news' element={<GetNews />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />

              <Route exact path='/' element={<Dashboard />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/fullchart' element={<GraphArea />} />



            </Routes>
          </div>
        </Router >
      </ALLState>
    </div>


  );
}

export default App;
