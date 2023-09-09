const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
export default class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1 style={{ textAlign: "center" }}>See All The Pokemon!</h1>
        <a href="/pokemon/new">Create New Pokemon</a>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// module.exports = Index