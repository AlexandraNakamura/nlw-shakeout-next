import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className= { styles.profileContainer}>
            <img src="https://github.com/AlexandraNakamura.png" alt="Naka" />
            <div>
                <strong>Naka</strong>
                <p>
                    <img src="icons/level.svg" alt="Icon Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}