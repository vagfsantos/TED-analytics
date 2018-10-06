import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Display from '../Display'

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Display />
      </>
    )
  }
}
render(
  <App />,
  document.querySelector('#app')
)
