import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { Main } from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>ToDo: Error</div>,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <div>TODO: About Page</div>,
      },
      {
        path: '/menu',
        element: <div>TODO: Menu Page</div>,
      },
      {
        path: '/reservation',
        element: <div>TODO: Book Reservation Page</div>,
      },
      {
        path: '/online',
        element: <div>TODO: Order Online Page</div>,
      },
      {
        path: '/login',
        element: <div>TODO: Login Page</div>,
      },
      {
        path: '/cart',
        element: <div>TODO: Cart Page</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
