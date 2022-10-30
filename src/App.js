import React from "react";
import Login from "./pages/users/Login";
import Issues from "./pages/issues/Issues";
import NewIssue from "./pages/issues/NewIssue";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateIssue from "./pages/issues/UpdateIssue";
import NewUser from "./pages/users/NewUser";
import { ProtectedRoute } from "./components/ProtectedRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Issues />} />
          <Route path="/new-issue" element={<NewIssue />} />
          <Route path="/update-issue" element={<UpdateIssue />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/new-user" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
