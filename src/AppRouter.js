import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedPage from './Pages/ProtectedPage';
import Home from './Pages/Home';
import ArticleDetail from './Pages/ArticleDetail';
import ShoppingList from './Pages/ShoppingList';
import AddRecipe from './Pages/AddRecipe';
import ShowRecipes from './Pages/ShowRecipes';
import RecipeDetails from './Pages/RecipeDetail';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage />}>
          <Route index element={<Home />} />
          <Route path="article/:itemID" element={<ArticleDetail />} />
          <Route path="shoppinglist" element={<ShoppingList />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="recipes" element={<ShowRecipes />} />
          <Route path="repice/:recipeID" element={<RecipeDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
