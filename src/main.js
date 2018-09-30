// Global behavior
// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

// APP'S MAIN STYLES
import './styles/main.styl'
// Main Component
import './components/App'


console.log(`Environment: ${NODE_ENV.production ? 'production' : 'development'}`);
console.log(`App name: ${APP_NAME}`);
