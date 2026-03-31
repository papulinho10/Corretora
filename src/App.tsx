import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import AboutUs from './pages/AboutUs';
import Broker from './pages/Broker';

const Root = () => (
  <>
    <Layout />
    <ScrollRestoration />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "imovel/:id", element: <PropertyDetails /> },
      { path: "sobre", element: <AboutUs /> },
      { path: "corretora", element: <Broker /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
