import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./header.module.scss";
import clsx from "clsx";

function Header() {
  return (
    <>
      <header className={styles.container}>
        <Link to="/">
          {" "}
          <h1>Film list</h1>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                clsx(styles.nav__link, isActive && styles.nav__link_active)
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                clsx(styles.nav__link, isActive && styles.nav__link_active)
              }
            >
              Films
            </NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export { Header };
