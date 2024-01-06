import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)

  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products/:category" element={<ProductList />} />
  <Route path="/product/:productId" element={<Product />} />
  <Route
    path="/login"
    element={user ? <Navigate to="/" /> : <Login />}
  />
  <Route
    path="/register"
    element={user ? <Navigate to="/" /> : <Register />}
  />
  <Route path="/cart" element={<Cart />} />
</Routes>
    </Router>
  );
};

export default App;
