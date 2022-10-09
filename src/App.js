import { useEffect, } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchJwt } from "./api/fetchJwt";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const jwt = fetchJwt()
    if (!jwt || jwt.value !== '123') {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
