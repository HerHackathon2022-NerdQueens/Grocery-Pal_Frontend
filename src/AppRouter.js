import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedPage from './Pages/ProtectedPage';
import Home from './Pages/Home';
import ArticleDetail from './Pages/ArticleDetail';
import ShoppingList from './Pages/ShoppingList';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage />}>
          <Route index element={<Home />} />
          <Route path="article/:itemID" element={<ArticleDetail />} />
          <Route path="shoppinglist" element={<ShoppingList />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
