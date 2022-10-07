import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {

  const [isLogin, setIsLogin] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setIsLogin(jwt)
  }, [])

  if (isLogin) {
    return <Navigate to='/login' replace />
  }

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
