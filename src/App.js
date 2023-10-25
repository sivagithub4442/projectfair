import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Footer from './components/Footer';


function App() {
  return (
   
    <div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>


     </Routes>
     <Footer/>
     
    </div>
   
  );
}

export default App;
