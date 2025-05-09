// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementButtonClick = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    const oddOrEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="count-card">
          <h1 className="heading">Count {count}</h1>
          <p className="count-odd-even">Count is {oddOrEven}</p>
          <button
            className="button-style"
            type="button"
            onClick={this.onIncrementButtonClick}
          >
            Increment
          </button>
          <p className="description">
            *increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
