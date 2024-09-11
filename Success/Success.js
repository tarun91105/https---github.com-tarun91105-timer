import {Component} from 'react'
import './index.css'

class Success extends Component {
  Back = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="s">
        <img
          className="success"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3LYtgtMfYO4DFHH18uJYBYicn-qS3MoJ6g&s"
          alt="success"
        />
        <button onClick={this.Back} className="button" type="button">
          Home
        </button>
      </div>
    )
  }
}

export default Success
