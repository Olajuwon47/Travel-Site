import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './Pages/Home.tsx';
import AboutUs from './Pages/About Us.tsx';
import Contact from './Pages/contact.tsx';
import Faq from './Pages/Faq.tsx';
import Destination from './Pages/Destination.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/About Us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },{
        path: '/Faq',
        element: <Faq />,
      },

      {
        path: '/Destinations',
        element: <Destination />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

