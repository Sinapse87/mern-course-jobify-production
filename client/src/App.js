import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ProtectedRoute, Register, Landing, Error } from './pages'
import {
  AllJobs,
  AddJob,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;

const Button2 = styled.button`
  background: blue;
  color: white;
  font-size: 1rem;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute><SharedLayout/></ProtectedRoute>
            
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />}></Route>
          <Route path="add-job" element={<AddJob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
