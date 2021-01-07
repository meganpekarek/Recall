import React from "react";
import '../App.css';

/**
 * Renders a primary button
 */
class PrimaryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { btnTitle, onClickFunc } = this.props;

    return (
      <React.Fragment>
        <button className="primaryButton" onClick={onClickFunc}>{btnTitle}</button>
      </React.Fragment>
    );
  }
}

export default PrimaryButton;
