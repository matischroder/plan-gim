import React from "react";
import "./App.css";

class Mas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ejercicios: []
    };
  }

  handleDelete = ejercicioId => {
    console.log("borrando " + ejercicioId);
    const ejerci = this.state.ejercicios.filter(c => c.id !== ejercicioId);
    this.setState({ ejercicios: ejerci });
  };

  handleClick = e => {
    e.preventDefault();
    const ejerc = this.state.ejercicios;
    const newEjercicio = new Ejercicio();
    newEjercicio.id = ejerc.length === 0 ? 0 : ejerc[ejerc.length - 1].id + 1;
    console.log("CREANDO " + newEjercicio.id);
    ejerc.push(newEjercicio);
    this.setState({ ejercicios: ejerc });
  };
  render() {
    return (
      <div id="div-center" className="container">
        <button
          className="btn btn-primary m-2"
          aria-label="Left Align"
          onClick={this.handleClick}
        >
          +
        </button>

        {this.state.ejercicios.map(ejercicio => (
          <Ejercicio
            onDelete={this.handleDelete}
            key={ejercicio.id}
            id={ejercicio.id}
          />
        ))}
      </div>
    );
  }
}

class Ejercicio extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          id="ejer"
          className="form-control"
          placeholder="Ejercicio"
          type="text"
        />
        <input className="form-control" placeholder="Series" type="number" />
        <input className="form-control" placeholder="Repes" type="number" />
        <input className="form-control" placeholder="Kg" type="number" />
        <button
          onClick={() => {
            if (
              window.confirm(
                "¿Estas seguro que deseas eliminar este ejercicio?"
              )
            ) {
              this.props.onDelete(this.props.id);
            }
          }}
          class="btn btn-danger"
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Mas;
