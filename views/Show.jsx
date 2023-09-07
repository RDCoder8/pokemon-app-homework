import React, { Component } from 'react'
import pokemon from '../models/pokemon';
const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
    textAlign: "center"
  };
export default class Show extends Component {
  render() {
    const { pokemon } = this.props
    return (
        <div style={myStyle}>
        <h1 style={{ textAlign: "center" }}>Gotta Catch Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img + ".jpg"} alt="No Image" width={200} height={200}/>
        <br />
        <a href="/pokemon">Back</a>
      </div>
    )
  }
}
