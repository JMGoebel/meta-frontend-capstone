import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes';
import '../styles/nav.scss';

export const Nav = () => {
  const navRoutes = routes[0].children;
  const [links, setLinks] = useState(navRoutes);
  let location = useLocation();

  // Do not show surrent route
  useEffect(() => {
    const displayPaths = navRoutes.filter(link => {
      return link.path != location.pathname;
    });

    setLinks(displayPaths);
  }, [location]);

  return (
    <nav className="nav-component">
      <ul className="header-nav">
        {links.map(link => (
          <li> 
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
