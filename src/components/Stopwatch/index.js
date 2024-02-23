// Write your code here
import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  /* state has initial time in seconds ie. 00:00 */
  state = {timeInSeconds: 0}
  /* Increment time in seconds by 1 */
  tick = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }
  /* tick function is called for every 1 second */
  onClickStartTimer = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  /* stops the time */
  onClickStopTimer = () => {
    clearInterval(this.intervalId)
  }
  /* reset the time to 00:00 */
  onClickResetTimer = () => {
    this.setState({timeInSeconds: 0})
  }
  /* Get string time in minutes and seconds */
  getStringifiedTime = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60

    const stringifiedMinutes = minutes > 9 ? `${minutes}` : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? `${seconds}` : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-card-head-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <h1 className="stopwatch-card-heading">Timer</h1>
            </div>
            <h1 className="time">{this.getStringifiedTime()}</h1>
            <div className="stopwatch-card-buttons-container">
              <button
                className="stopwatch-card-btn green-btn"
                type="button"
                onClick={this.onClickStartTimer}
              >
                Start
              </button>
              <button
                className="stopwatch-card-btn red-btn"
                type="button"
                onClick={this.onClickStopTimer}
              >
                Stop
              </button>
              <button
                className="stopwatch-card-btn yellow-btn"
                type="button"
                onClick={this.onClickResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
