
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import JobList from './modules/JobList/JobList';
import CategoryDetail from './modules/CategoryDetail/CategoryDetail';
import Register from './modules/Register/Register';
import Login from './modules/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/jobList/:keyword" element={<JobList />} />
          <Route path="/:tenLoaiCongViec/:MaLoaiCongViec" element={<CategoryDetail />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
