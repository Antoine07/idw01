import React from "react";

import Button from "./Styles/Button";
import Presentation from './Styles/Presentation';
import GlobalStyle from './Styles/Global';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      message: "Hello React",
    };

    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(active){
    this.setState({ active : active}) ;
  }

  render() {
    const { message, active } = this.state;

    return (
      <Presentation>
        <GlobalStyle />
        <Button onClick={() => this.handleClick(true)}>Open</Button>
        <Button primary={true} onClick={() => this.handleClick(false)}>Closed</Button>
        {active && <p>{message}</p>}
      </Presentation>
    );
  }
}

export default App;
