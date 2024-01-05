import App from './App';
import { Main } from './components/Main';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>ToDo: Error</div>,
    children: [
      {
        path: '/',
        name: 'Home',
        element: <Main />,
      },
      {
        path: '/about',
        name: 'About',
        element: <div>TODO: About Page</div>,
      },
      {
        path: '/menu',
        name: 'Menu',
        element: <div>TODO: Menu Page</div>,
      },
      {
        path: '/reservation',
        name: 'Reservation',
        element: <div>TODO: Book Reservation Page</div>,
      },
      {
        path: '/online',
        name: 'Order Online',
        element: <div>TODO: Order Online Page</div>,
      },
      {
        path: '/login',
        name: 'Login',
        element: <div>TODO: Login Page</div>,
      },
      {
        path: '/cart',
        name: 'Cart',
        element: <div>TODO: Cart Page</div>,
      },
    ],
  },
];
