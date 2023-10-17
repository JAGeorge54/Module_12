"use strict";

class ReactIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      productName: null,
      productDescription: null,
      productPrice: null,
    };
  }

  initializeState = () => {
    // TODO: set the state object to have values according to the instructions

    // do not edit this code
    return this.state;
  };

  render() {
    // you may use this log if needed to ensure you have the correct values in your state
    console.log(this.state);
    const { initialized } = this.state;

    // use string interpolation to construct this
    const stringToReturn = ``;

    if (this.state.initialized) {
      return stringToReturn;
    }

    return React.createElement(
      "button",
      { id: "initial-button", onClick: () => this.initializeState() },
      "Click here to initialize your state"
    );
  }
}

ReactDOM.render(
  React.createElement(ReactIntro),
  document.getElementById("jsx-container")
);

if (typeof module !== "undefined") {
  module.exports = { initializeState };
}
