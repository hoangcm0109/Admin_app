import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Blank />} />
          <Route path="product" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="stats" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
