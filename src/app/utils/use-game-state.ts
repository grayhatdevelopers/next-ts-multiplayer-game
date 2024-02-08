const useGameState = (gameState:string) => {
    const isStartGame = gameState === 'start'
    const isNewGame = gameState === 'game/new'

    return {
        isStartGame,
        isNewGame
    }
}

export default useGameState