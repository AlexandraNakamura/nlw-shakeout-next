import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainers}>
            <div className={styles.challengeBoxNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avace de level completando desafios.
                </p>
            </div>
        </div>
    )
}