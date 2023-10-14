import { useEffect, useState } from 'react';
import { IUser } from '../../utils/interfaces';
import { UserCard } from "../../components/UserCard";
import { WeatherCard } from "../../components/WeatherCard";
import styles from './BookmarkPage.module.scss';

interface UserInfo {
    user: IUser;
}

export const BookmarkPage = () => {
    const [userInfo, setUserInfo] = useState<UserInfo[]>([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('savedData') || '[]');
        setUserInfo(savedData);
    }, []);

    return (
        <section className='section'>
            <div className={styles.card}>
                {userInfo.map((data, index) => (
                    <div key={index} className={styles.card__item}>
                        <UserCard user={data.user} showButton={false}/>
                        <WeatherCard user={data.user}/>
                    </div>
                ))}
            </div>
        </section>
    );
};
