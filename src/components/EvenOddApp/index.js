// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  isIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(preState => ({count: preState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="heading2">Count is {displayText}</p>
          <button className="btn" type="button" onClick={this.isIncrement}>
            Increment
          </button>
          <p className="note-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
