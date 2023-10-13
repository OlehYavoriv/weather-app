import {FC} from 'react';
import {IUser} from "../../utils/interfaces";
import styles from './UserCard.module.scss';

interface UserCardProps {
    user: IUser;
}

export const UserCard: FC<UserCardProps> = ({user}) => {
    return (
        <div className={styles.user_card}>
            <img className={styles.user_card__avatar} src={user.picture.large} alt='Avatar'/>
            <ul className={styles.user_card__data}>
                <li><span>Name:</span> {user.name.first} {user.name.last}</li>
                <li><span>Email:</span><a href={`mailto:${user.email}`}> {user.email}</a></li>
                <li><span>Gender:</span> {user.gender}</li>
                <li>
                    <span>Location:</span> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
                </li>
            </ul>
            <div className={styles.user_card__btns}>
                <button className={styles.save_btn}>Save</button>
                <button className={styles.modal_btn}>Weather</button>
            </div>
        </div>
    );
};
