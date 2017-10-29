// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { thunkWorld } from './containers/ScreensContainer/logic'
import './injectGlobal'
import './initialize'

const store = configureStore()
store.dispatch(thunkWorld())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
