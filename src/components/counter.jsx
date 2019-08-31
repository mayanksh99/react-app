import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };
  styles = {
    fontWeigth: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        <h1 style={this.styles} className={this.getBadgeClasses()}>
          {this.change()}
        </h1>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
  change = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
