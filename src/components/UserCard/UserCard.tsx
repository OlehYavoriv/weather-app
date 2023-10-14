import { FC, useState } from 'react';
import { IUser } from "../../utils/interfaces";
import { Modal } from "../Modal";
import { WeatherCard } from "../WeatherCard";
import { toast } from "react-toastify";
import { success } from "../../utils/toasts";
import styles from './UserCard.module.scss';

interface UserCardProps {
    user: IUser;
    isSaved?: boolean;
    showButton: boolean;
}

export const UserCard: FC<UserCardProps> = ({ user, isSaved, showButton = true }) => {
    const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
    const [saved, setIsSaved] = useState(isSaved);

    const openWeatherModal = () => {
        setIsWeatherModalOpen(true);
    };

    const closeWeatherModal = () => {
        setIsWeatherModalOpen(false);
    };

    const handleSave = async (user: IUser) => {
        try {
            if (typeof localStorage !== 'undefined') {
                const existingData = JSON.parse(localStorage.getItem('savedData') || '[]');
                const isUserAlreadySaved = existingData.some((savedData: any) => savedData.user.email === user.email);
                if (!isUserAlreadySaved) {
                    const newData = [...existingData, {user}];
                    localStorage.setItem('savedData', JSON.stringify(newData));
                    toast.success('User saved successfully!', success);
                    setIsSaved(true);
                } else {
                    toast.warning('User already saved!', success);
                }
            } else {
                console.error('localStorage is not available');
            }
        } catch (error) {
            console.error('Error saving user to localStorage:', error);
        }
    };

    const handleRemove = () => {
        try {
            if (typeof localStorage !== 'undefined') {
                const existingData = JSON.parse(localStorage.getItem('savedData') || '[]');
                const updatedData = existingData.filter((savedData: any) => savedData.user.email !== user.email);
                localStorage.setItem('savedData', JSON.stringify(updatedData));
                toast.success('User removed successfully!', success);
                setIsSaved(false);
            } else {
                console.error('localStorage is not available');
            }
        } catch (error) {
            console.error('Error removing user from localStorage:', error);
        }
    };

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
                {showButton && (
                    <button className={styles.save_btn} onClick={saved ? handleRemove : () => handleSave(user)}>
                        {saved ? 'Remove' : 'Save'}
                    </button>
                )}
                <button className={styles.modal_btn} onClick={openWeatherModal}>Weather</button>
            </div>
            {isWeatherModalOpen && (
                <Modal onClose={closeWeatherModal}>
                    <WeatherCard user={user}/>
                </Modal>
            )}
        </div>
    );
};
