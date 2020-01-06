// RIP Vanilla JS
// const siteTitle = document.createElement('h1');
// siteTitle.textContent = 'Recipe List';

// document.querySelector('#root').appendChild(siteTitle);

// React
const siteTitle = React.createElement('h1', {}, 'Recipe List');

const rootDiv = document.getElementById('root');

ReactDOM.render(siteTitle, rootDiv);
