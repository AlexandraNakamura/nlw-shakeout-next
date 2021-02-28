import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContexData {
    level: Number; 
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void; 
    completeChallenge: () => void;
}


interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContexData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 2, 3)

    function levelUp() {
        setLevel(level + 1);
    }


    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }


    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if (!activeChallenge){
            return;
        }
        
        const { amount} = activeChallenge;

        let finalExeperience = currentExperience + amount; 

        if (finalExeperience >= experienceToNextLevel ) {
            finalExeperience = finalExeperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExeperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1); 
    }

    return (
        <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge, activeChallenge, resetChallenge, experienceToNextLevel, completeChallenge}}>
            {children}
        </ChallengesContext.Provider>
    );
}

