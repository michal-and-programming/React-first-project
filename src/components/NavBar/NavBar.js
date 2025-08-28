import styles from "./NavBar.module.scss"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div>
          <a href="/">
            <i className="fa fa-tasks"></i>
          </a>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink className= {({isActive}) => isActive ? styles.linkActive : undefined} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;