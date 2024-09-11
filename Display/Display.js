import {Component} from 'react'
import './index.css'

class Display extends Component {
  render() {
    const {item} = this.props
    const {firstname, lastname, phone, address, email} = item
    return (
      <div className="prof">
        <div className="each-item">
          <h1 className="font">FirstName : </h1>
          <h2>{firstname}</h2>
        </div>
        <div className="each-item">
          <h1 className="font">LastName :</h1>
          <h2>{lastname}</h2>
        </div>
        <div className="each-item">
          <h1 className="font">Phone :</h1>
          <h2>{phone}</h2>
        </div>
        <div className="each-item">
          <h1 className="font">Address :</h1>
          <h2>{address}</h2>
        </div>
        <div className="each-item">
          <h1 className="font">Email :</h1>
          <h2>{email}</h2>
        </div>
      </div>
    )
  }
}

export default Display
