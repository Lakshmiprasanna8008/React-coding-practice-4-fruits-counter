// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {bCount: 0, mCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mCount: prevState.mCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bCount: prevState.bCount + 1}))
  }

  render() {
    const {mCount, bCount} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>
            Bob ate <span>{mCount}</span> mangoes <span>{bCount}</span> bananas
          </h1>
          <div className="items-container">
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
