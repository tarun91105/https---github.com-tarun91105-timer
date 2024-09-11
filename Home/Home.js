import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home">
          <Link to="/create-profile" className="link">
            <div className="each-feature">
              <h1>Create Profile</h1>
            </div>
          </Link>
          <Link to="/update-profile" className="link">
            <div className="each-feature">
              <h1>Update Profile</h1>
            </div>
          </Link>
          <Link to="/read-profile" className="link">
            <div className="each-feature">
              <h1>Read Profile</h1>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
