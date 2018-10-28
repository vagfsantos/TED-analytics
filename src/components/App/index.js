import { render } from 'react-dom'

// Components
import Header from '../Header'

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}
render(
  <App />,
  document.querySelector('#app')
)
