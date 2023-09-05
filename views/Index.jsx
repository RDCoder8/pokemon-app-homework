const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
export class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1 style={{textAlign: 'center'}}>
            See All The Pokemon!
        </h1>
      </div>
    )
  }
}

module.exports = Index