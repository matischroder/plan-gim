import React, { Component } from "react";
/*import Ejercicio from "./labels";

class Completar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onNew = () => {
    <Ejercicio />;
  };
  render() {
    return (
      <button
        className="btn btn-primary m-2"
        aria-label="Left Align"
        onClick={this.props.onNew}
      >
        <b>+</b>
      </button>
    );
  }
}

export default Completar;
*/
class Ejercicio extends React.Component {
  /*constructor(props) {
    super(props);
    this.props = {
      ej: "Ejercicio",
      repes: "Repeticiones",
      series: "Series",
      peso: "Peso"
    };
  }*/
  render() {
    return (
      <div>
        <label>
          {this.props.ej}
          <input type="text" />
        </label>{" "}
        <label>
          {this.props.repes}
          <input type="text" />
        </label>{" "}
        <label>
          {this.props.series}
          <input type="text" />
        </label>{" "}
        <label>
          {this.props.peso}
          <input type="text" />
        </label>
      </div>
    );
  }
}
export default Ejercicio;
