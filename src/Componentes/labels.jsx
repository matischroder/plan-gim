/*import React, { Component } from "react";
import "./Completar";
import Completar from "./Completar";
import { Script } from "vm";
import { type } from "os";
import { tsConstructorType, tsImportEqualsDeclaration } from "@babel/types";



class Ejercicio extends Component {
  constructor (){
    super();
    this.state = {
      titulo: "Ejercicio",
      series:3,
      repeticiones:10,
      peso:50
    }
  }

  render() {
    return {
      {this.state.titulo}
      <input type="text"/>
      {this.state.series}
      <input type="text"/>
      {this.state.repe}
    };
  }
}

export default Ejercicio;
