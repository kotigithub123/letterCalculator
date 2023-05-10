// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onSearchChange = event => {
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {count, searchInput} = this.state
    console.log(searchInput)
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="Enter the phrase">Enter the phrase</label>
          <input
            type="search"
            htmlFor="Enter the phrase"
            placeholder="Enter the phrase"
            onChange={this.onSearchChange}
          />
          <div>
            <p className="button">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
