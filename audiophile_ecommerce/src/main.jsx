import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './context/products_context';
import './index.css';
import Layout from './Layout';
import {
  EarphonesPage,
  ErrorPage,
  HeadphonesPage,
  Homepage,
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
