import '../App.css';
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <span className="pageHeader">Player 1</span>
        <div className="playerFormWrapper">
          <input placeholder="name"></input>
          <div className="addPlayerBtnWrapper">
            <PrimaryButton btnTitle="Enter Phrases" />
          </div>
        </div>
      </div>
    );
  }
}
export default AddPlayer;