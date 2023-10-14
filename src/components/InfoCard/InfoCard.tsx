import { useEffect, useState } from 'react';
import { UserCard } from "../UserCard";
import { IUser } from "../../utils/interfaces";
import { WeatherCard } from "../WeatherCard";
import { getUserInfo } from "../../api/UserApi";
import { Spinner } from "../Spinner";
import styles from './InfoCard.module.scss';

export const InfoCard = () => {
    const [userInfo, setUserInfo] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserInfo();
            if (response) setUserInfo(response.results);
        };
        fetchData();
    }, []);

    if (!userInfo) return <Spinner/>;

    const loadMore = async () => {
        const response = await getUserInfo();
        if (response) setUserInfo((prevUsers) => [...prevUsers, ...response.results]);
    };

    return (
        <div className={styles.card}>
            {userInfo.map((user: IUser, index: number) => (
                <div key={index} className={styles.card__item}>
                    <UserCard user={user} isSaved={false} showButton={true}/>
                    <WeatherCard user={user}/>
                </div>
            ))}
            <button className={styles.loadMore_btn} onClick={loadMore}>Load more</button>
        </div>
    );
};
