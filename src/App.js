
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
