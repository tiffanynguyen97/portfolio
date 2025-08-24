// Simple React component for CDN integration
const e = React.createElement;

function HelloReact() {
  return e('div', { style: { color: 'blue', fontWeight: 'bold' } }, '');
}

ReactDOM.render(e(HelloReact), document.getElementById('react'));
