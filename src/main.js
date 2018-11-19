import { render } from 'react-dom'

// Temporary Components while out app doesn't have a router system
import Header from './components/Header'
import Sidebar from './components/Sidebar'

// APP'S MAIN STYLES
import './styles/main.styl'

// Global behavior
// Setting up 'HMR'
if(module.hot) {
  module.hot.accept()
}

render(
  <div>
    <Header />
    <Sidebar />
  </div>, 
  document.querySelector('#app')
)


console.log(`Environment: ${NODE_ENV.production ? 'production' : 'development'}`);
console.log(`App name: ${APP_NAME}`);
