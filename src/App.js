import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <>
    
  
    <Routes>
    <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
    </Routes>
    {/* <Dashboard /> */}

    </>
  );
}

export default App;
