// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}


import './app.js';

console.log(`Environment: ${ENV}`);
console.log(`App name: ${APP_NAME}`);
