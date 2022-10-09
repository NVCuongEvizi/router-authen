import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedLogin from "./components/ProtectedLogin";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedLogin />}>
          <Route path='/*' element={<Dashboard />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
