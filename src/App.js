import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (!jwt) {
      console.log('no jwt')
      navigate('/login')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
