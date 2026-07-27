import { createBrowserRouter } from 'react-router-dom';
import Main_Layout from '../Layout/Main_Layout';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ProductForm from '../pages/ProductForm';
import ErrorPage from '../pages/ErrorPage';
import { getProducts, getProduct } from '../Api/ApiService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main_Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getProducts,
      },
      {
        path: 'add',
        element: <ProductForm />,
      },
      {
        path: ':id',
        element: <ProductDetail />,
        loader: ({ params }) => getProduct(params.id),
      },
      {
        path: ':id/edit',
        element: <ProductForm />,
        loader: ({ params }) => getProduct(params.id),
      },
    ],
  },
]);

export default router;