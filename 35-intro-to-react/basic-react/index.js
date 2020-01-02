// Vanilla JS
// const siteTitle = document.createElement('h1');
// siteTitle.textContent = 'Recipe List';

// const rootElement = document.getElementById('root')
// rootElement.appendChild(siteTitle);

// React
const siteTitle = React.createElement('h1', {}, 'Recipe List');

const rootElement = document.getElementById('root');
ReactDOM.render(siteTitle, rootElement);

console.log(siteTitle)