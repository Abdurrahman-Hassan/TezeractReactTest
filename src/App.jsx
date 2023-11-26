import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import UserTable from "./pages/UserTable";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/user-table" element={<UserTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
