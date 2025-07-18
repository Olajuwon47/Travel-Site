import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const Home = lazy(() => import('./Pages/Home.tsx'));
const AboutUs = lazy(() => import('./Pages/About Us.tsx'));
const Contact = lazy(() => import('./Pages/contact.tsx'));
const Faq = lazy(() => import('./Pages/Faq.tsx'));
const Destination = lazy(() => import('./Pages/Destination.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/About Us',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/Faq',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Faq />
          </Suspense>
        ),
      },
      {
        path: '/Destinations',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Destination />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

