import React from 'react';
import { Provider } from 'react-redux'
import SignUpFormContainer from './session/sign_up_form_container'
import LogInFormContainer from './session/log_in_form_container'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { App } from './app'

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" component={ SignUpFormContainer } />
          <Route path="/login" component={ LogInFormContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
