import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.scss';

export const Nav = () => {
  const [routes, setRoutes] = useState([]);

  let location = useLocation();

  const navigationPaths = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/menu',
      name: 'Menu',
    },
    {
      path: '/reservation',
      name: 'Reservations',
    },
    {
      path: '/online',
      name: 'Order Online',
    },
    {
      path: '/login',
      name: 'Login',
    },
  ];

  // Remove routes from the list if user is on that current route
  useEffect(() => {
    const displayPaths = navigationPaths.filter(route => {
      return route.path != location.pathname;
    });

    setRoutes(displayPaths);
  }, [location]);

  return (
    <nav className="nav-component">
      <ul className="header-nav">
        {routes.map(route => (
          <li>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
