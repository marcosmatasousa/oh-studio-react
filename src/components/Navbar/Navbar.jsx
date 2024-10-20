import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavRoute from './NavRoute/NavRoute';
import style from './Navbar.module.css';

const routes = ['Home', 'Profile', 'Contact'];
const initialState = [true, false, false];


function Navbar() {
  const [isActive, setIsActive] = useState(initialState);

  function handleRouteClick(routeId) {
    const newArr = Array(isActive.length).fill(false);
    newArr[routeId] = true;
    setIsActive(newArr);
  }

  const navRoutes = routes.map((route, index) => {
    return (
        <Link className={style.link} key={index} to={route === 'Home' ? '/' : `/${route}`.toLowerCase()}>
            <NavRoute
            id={index}
            isActive={isActive[index]}
            routeName={route}
            handleClick={handleRouteClick}
            />
        </Link>
    )
    });

  return (
    <div className={style.navSpacer}>
      <div className={style.navbar}>
        {navRoutes}
      </div>
    </div>
  );
}

export default Navbar;