import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
    isDisabled: true
  };
  styles = {
    fontWeigth: "bold",
    fontSize: 50
  };

  increase = () => {
    if (this.state.count === 0) {
      this.setState({ count: this.state.count + 1, isDisabled: false });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  decrease = () => {
    if (this.state.count - 1 === 0) {
      this.setState({ count: 0, isDisabled: true });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0, isDisabled: true });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <nav className="navbar navbar-light bg-light mb-2">
          <div className="container">
            <span className="navbar-brand h1">Counter</span>
          </div>
        </nav>
        <div className="container">
          <div className="mb-4">
            <button onClick={this.reset} className="btn btn-primary ">
              Reset
            </button>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <span style={this.styles} className={this.getBadgeClasses()}>
                {this.change()}
              </span>
            </div>
            <div className="col-lg-1">
              <button onClick={this.increase} className="btn btn-secondary">
                +
              </button>
            </div>
            <div className="col-lg-1">
              <button
                onClick={this.decrease}
                className="btn btn-secondary"
                disabled={this.state.isDisabled}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  change = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge mr-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
