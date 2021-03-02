import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';



export function Profile() {
    const { level } = useContext(ChallengesContext);
    

    return (
        <div className= { styles.profileContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT524w5Wn-iI4nXqIV1jar7gXdp6ETjGuOw&usqp=CAU" alt="Avatar" />
            <div>
                <strong>Usuário</strong>
                <p>
                    <img src="icons/level.svg" alt="Icon Level" />
                    Level { level }
                </p>
            </div>
        </div>
    )
}