import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedPage from './Pages/ProtectedPage';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
