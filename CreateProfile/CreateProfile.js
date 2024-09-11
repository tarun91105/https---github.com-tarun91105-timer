import {Component} from 'react'
import './index.css'

class CreateProfile extends Component {
  state = {first: '', last: '', phone: '', email: '', address: ''}

  SubmitForm = async event => {
    event.preventDefault()
    console.log('vent')
    const {first, last, phone, email, address} = this.state
    const url = 'http://localhost:8080/'
    const userDetails = {first, last, phone, email, address}
    console.log(first, last, phone, email, address)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = fetch(url, options)
    const {history} = this.props
    history.replace('/success')
    console.log(response)
  }

  FirstName = event => {
    const {first} = this.state
    console.log(first)
    this.setState({first: event.target.value})
  }

  LastName = event => {
    const {last} = this.state
    console.log(last)
    this.setState({last: event.target.value})
  }

  Phone = event => {
    this.setState({phone: event.target.value})
  }

  Email = event => {
    this.setState({email: event.target.value})
  }

  Address = event => {
    this.setState({address: event.target.value})
  }

  render() {
    return (
      <div className="create-profile">
        <div className="form-details">
          <div className="input">
            <input
              onChange={this.FirstName}
              className="input-label"
              id="first-name"
              type="text"
              placeholder="FirstName"
            />
            <input
              onChange={this.LastName}
              className="input-label"
              type="text"
              placeholder="LastName"
            />
            <div className="sec-inp-box">
              <input
                onChange={this.Phone}
                className="input-label"
                type=""
                placeholder="Phone"
              />
              <input
                onChange={this.Email}
                className="input-label"
                type="text"
                placeholder="Email"
              />
            </div>
            <input
              onChange={this.Address}
              className="inp-address"
              placeholder="Address"
              type="text"
            />
          </div>
          <button onClick={this.SubmitForm} className="btn" type="submit">
            Create Customer
          </button>
        </div>
      </div>
    )
  }
}

export default CreateProfile
