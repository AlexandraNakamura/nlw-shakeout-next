import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/completeChallenges.module.css';

export function CompleteChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallengesConteiner}> 
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}