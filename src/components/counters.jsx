import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters");
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary ">
          Reset
        </button>
        <div>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
            ></Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
