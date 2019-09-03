import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  reset = () => {
    const counters = this.state.counters.map(v => {
      v.value = 0;
      return v;
    });
    this.setState({ counters });
  };

  render() {
    console.log("Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.reset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
