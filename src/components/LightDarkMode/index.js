import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  render() {
    const {isMode} = this.state
    let modeButton

    if (isMode) {
      modeButton = (
        <div className="bg-container1">
          <h1 className="heading1">Click To Change Mode</h1>
          <button className="button">Light mode</button>
        </div>
      )
    } else {
      modeButton = (
        <div className="bg-container2">
          <h1 className="heading2">Click To Change Mode</h1>
          <button className="button">Dark mode</button>
        </div>
      )
    }

    return (
      <div className="bg-container1">
        <h1 className="heading1">Click To Change Mode</h1>
        <button className="button">Light mode</button>

        {modeButton}
      </div>
    )
  }
}
export default LightDarkMode
