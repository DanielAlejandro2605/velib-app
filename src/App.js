import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
import Login from "./components/pages/auth/login";
import "./App.css";
import Dashboard from "./components/pages/dashboard";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
