import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Display from '../Display'
import './index.css'

class ReadProfile extends Component {
  state = {profile: []}

  componentDidMount() {
    this.Call()
  }

  Call = async () => {
    console.log('call')
    const url = 'http://localhost:8080/profiles'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const final = await response.json()
    this.setState({profile: [...final]})
  }

  Back = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {profile} = this.state
    return (
      <div className="read">
        <h1>Your Profiles</h1>
        <ul className="each-cont">
          {profile.map(each => (
            <Display key={uuidv4()} item={each} />
          ))}
        </ul>
        <button className="button" onClick={this.Back} type="button">
          Home
        </button>
      </div>
    )
  }
}

export default ReadProfile
