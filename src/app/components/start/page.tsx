"use client"

import { useIsHost, useMultiplayerState } from "playroomkit"

const StartPage = () => {

    const isHost = useIsHost()

    const [, setGameState] = useMultiplayerState('gameState', 'start')

    const handleStartGame = () => {
        setGameState('game/new')
    }

    return (
        <>
            Hello world!
            <br />
            {
            isHost ?
                <button onClick={handleStartGame}>Start game</button>
                :
                <>Waiting for host...</>
            }        
        </>
    )
}

export default StartPage