import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation__list}>
                        <li><NavLink to='/weather'
                                     className={({isActive}) => isActive ? `${styles.active__link}` : `${styles.navigation__link}`}>Weather</NavLink>
                        </li>
                        <li><NavLink to='/saved'
                                     className={({isActive}) => isActive ? `${styles.active__link}` : `${styles.navigation__link}`}>Bookmark</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
