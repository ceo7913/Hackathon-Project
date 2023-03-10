import { createRoot } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './assets/css/app.css'
import store from './redux/store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

