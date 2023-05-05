import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, startGameAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winLoss-container">
      <div className="win-loss-card">
        <div className="text-container">
          <h1 className="text">{gameStatus}</h1>
          <p className="score-text">{scoreLabel}</p>
          <p className="result">{score}/12</p>
          <button className="pay-button" onClick={startGameAgain} type="button">
            Play Again
          </button>
        </div>
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
