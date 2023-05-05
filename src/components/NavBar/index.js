import './index.css'

const NavBar = props => {
  const {score, topScore, isGameProgress} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="app-logo"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
