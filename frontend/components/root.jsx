import React from 'react';
import { Provider } from 'react-redux'
import SessionFormContainer from '../components/session/session_form_container'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { App } from './app'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path='/login' component={ SessionFormContainer } />
          <Route path="/signup" component={ SessionFormContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
