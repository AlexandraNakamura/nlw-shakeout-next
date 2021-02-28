import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';



export function Profile() {
    const { level } = useContext(ChallengesContext);
    

    return (
        <div className= { styles.profileContainer}>
            <img src="https://github.com/AlexandraNakamura.png" alt="Naka" />
            <div>
                <strong>Naka</strong>
                <p>
                    <img src="icons/level.svg" alt="Icon Level" />
                    Level { level }
                </p>
            </div>
        </div>
    )
}