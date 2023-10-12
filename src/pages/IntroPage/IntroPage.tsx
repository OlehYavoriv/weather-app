import { Link } from "react-router-dom";
import umbrella from '../../assets/images/umbrella.png';
import styles from './IntroPage.module.scss';

export const IntroPage = () => {
    return (
        <section className='section'>
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <img src={umbrella} alt='Umbrella'/>
                </div>
                <div className={styles.banner}>
                    <img src={umbrella} alt='Umbrella' width={96} height={96}/>
                    <h1 className={styles.banner__title}>Sunshine</h1>
                    <h3 className={styles.banner__subtitle}>Weather App</h3>
                    <Link className={styles.banner__btn} to='/weather'>Get started</Link>
                </div>
            </div>
        </section>
    );
};
