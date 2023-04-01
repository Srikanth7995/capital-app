import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({countryName: event.target.value})
  }

  filteredList = () => {
    const {countryName} = this.state
    const optionText = countryAndCapitalsList.find(
      each => each.id === countryName,
    )
    const {country} = optionText
    return country
  }

  render() {
    const {countryName} = this.state
    const displayText = this.filteredList()
    return (
      <div className="bg-container">
        <div className="country-capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-bg-container">
            <select
              className="select-container"
              onChange={this.onChangeOption}
              value={countryName}
            >
              {countryAndCapitalsList.map(eachList => (
                <option value={eachList.id} key={eachList.id}>
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="country-name">{displayText}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
