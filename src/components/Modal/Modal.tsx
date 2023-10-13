import { FC } from "react";
import styles from './Modal.module.scss';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({onClose, children}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.btn}>
                    <span className={styles.close} onClick={onClose}>&times;</span>
                </div>
                {children}
            </div>
        </div>
    );
};
