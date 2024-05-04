import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import "./style/dark.scss";


function App() {
  let user = 0
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
