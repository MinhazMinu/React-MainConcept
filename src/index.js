import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
import * as serviceWorker from "./serviceWorker";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// react app start
// function Welcome(props) {
//   return <h1>Hello, {props.name} </h1>;
// }

// function Welcomw(props) {
//   return <h1>hello , {props.name}</h1>;
// }

// function App(props) {
//   return (
//     <div>
//       <Welcomw name="minhaz" />
//       <Welcomw name="hasib" />
//       <Welcomw name="minu" />
//       <Welcomw name={props.name} />
//     </div>
//   );
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>this is a clock</h1>
//       <h2>{props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class App extends Clock {
  render() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
