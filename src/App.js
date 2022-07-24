import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
import Login from "./components/pages/auth/login";
import "./App.css";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
