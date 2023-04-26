import Root from './Page/Root';
import Home from './Page/Home';
import NotFound from './Page/NotFound';
import AllProducts from './Page/AllProducts';
import MyCart from './Page/MyCart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsDetail from './Page/ProductsDetail';
import NewProduct from './Page/NewProduct';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    paht: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true, 
        element: <Home />
      },
      { 
        path: '/products', 
        element: <AllProducts />
      },
      { 
        path: '/products/:id', 
        element: <ProductsDetail />
      },
      {
        path: '/products/new', 
        element: 
          <ProtectedRoute requireAdmin={true}> 
           <NewProduct />
          </ProtectedRoute>
      },
      { 
        path: '/carts', 
        element: 
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
      },
      
    ]
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
