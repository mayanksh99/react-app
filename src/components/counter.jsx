import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontWeigth: "bold",
    fontSize: 50
  };

  // decrease = () => {
  //   if (this.state.count - 1 === 0) {
  //     this.setState({ count: 0, isDisabled: true });
  //   } else {
  //     this.setState({ count: this.state.count - 1 });
  //   }
  // };

  render() {
    console.log("Counter");
    return (
      <>
        {/* <div className="container"> */}
        <div>
          <h4>Counter #{this.props.counter.id}</h4>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.change()}
            </span>
          </div>
          <div className="col-lg-1">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary"
            >
              +
            </button>
          </div>
          {/* <div className="col-lg-1">
              <button
                onClick={this.decrease}
                className="btn btn-secondary"
                disabled={this.state.isDisabled}
              >
                -
              </button>
            </div> */}
          <div className="col-lg-2">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }

  change = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge mr-4 mb-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
