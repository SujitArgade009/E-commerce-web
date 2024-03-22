import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import CheckOut from './Pages/CheckOut';
import ProductDetailsPage from "./Pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage/>,
  },
]);

function App() {
  return (
    <div className='App'>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
