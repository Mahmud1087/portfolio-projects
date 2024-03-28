import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './context/products_context';
import './index.css';
import Layout from './Layout';
import {
  CheckoutPage,
  EarphonesPage,
  ErrorPage,
  HeadphonesPage,
  Homepage,
  SingleproductPage,
  SpeakersPage,
} from './pages/main';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path='earphones' element={<EarphonesPage />} />
      <Route path='headphones' element={<HeadphonesPage />} />
      <Route path='speakers' element={<SpeakersPage />} />
      <Route path=':productId' element={<SingleproductPage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
);
