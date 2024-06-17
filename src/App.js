import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          {/* ahora con /mens ShopCategory */}
          <Route path='/mens' element={<ShopCategory category="men" />} />
          {/* /womens ShopCategory, e igual com /kids */}
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />

          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          {/* ahora /login para loginSignup */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
