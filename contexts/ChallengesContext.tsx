import {createContext, ReactNode} from 'react';

interface ChallengesContexData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContexData);

export function ChallengeProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState (1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1 );
    }

    return (
        <challengesContext.Provider value={{ level, levelUp, currentExperience,  challengesCompleted, startNewChallenge,}}>

        </challengesContext.Provider>
    )
}