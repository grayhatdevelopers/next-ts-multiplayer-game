"use client"

import { useMultiplayerState } from "playroomkit"
import useGameState from "../utils/use-game-state"
import StartPage from "../components/start/page"
import NewGamePage from "../components/game/new/page"

const PlayPage = () => {

    const [gameState] = useMultiplayerState('gameState', 'start')

    const {isNewGame, isStartGame} = useGameState(gameState)

    return (
        <div>
            
            {
                isStartGame && (
                    <StartPage />
                )
            }

            {
                isNewGame && (
                    <NewGamePage />
                )
            }
            
        </div>
    )
}

export default PlayPage