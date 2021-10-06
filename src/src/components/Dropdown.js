import React, { Component } from "react";

export default class Dropdown extends Component {
  handleChange(e) {
    this.props.change(e.target.value);
  }
  render() {
    return (
      <div>
        <select id="poke-names" onChange={(e) => this.handleChange(e)}>
          {this.props?.data?.map((reg, i) => {
            return (
              <option key={i} value={reg}>
                {reg}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
