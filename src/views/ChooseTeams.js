import '../App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class ChooseTeams extends React.Component {
  constructor(props) {
    super(props);
  }

  goToAddPlayer = () => {
    this.props.history.push('/addplayer');
  }

  render() {
    return (
      <div className="App">
        <div className="doubleChoiceWrapper">
          <div className="doubleChoice" onClick={this.goToAddPlayer}>
            <span className="doubleChoiceHeader">Random Teams</span>
            <FontAwesomeIcon className="secondaryIcon doubleChoiceIcon" icon={faRandom} />
          </div>
          <div className="doubleChoice">
            <span className="doubleChoiceHeader">Choose Teams</span>
            <FontAwesomeIcon className="secondaryIcon doubleChoiceIcon" icon={faUsers} />
          </div>
        </div>
      </div>
    );
  }
}
export default ChooseTeams;