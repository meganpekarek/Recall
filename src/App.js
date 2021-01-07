import './App.css';
import PrimaryButton from './components/PrimaryButton'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward } from '@fortawesome/free-solid-svg-icons'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Recall
//       </header>
//       <FontAwesomeIcon className="accentIcon frontLogo" icon={faFastBackward} />
//       <button className="primaryButton" onClick={this.props.history.push('/chooseteams')}>Start a Game</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  goToChooseTeams = () => {
    this.props.history.push('/chooseteams');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Recall
        </header>
        <FontAwesomeIcon className="accentIcon frontLogo" icon={faFastBackward} />
        <PrimaryButton btnTitle="Start a Game" onClickFunc={this.goToChooseTeams} />
      </div>
    );
  }
}

export default App;
