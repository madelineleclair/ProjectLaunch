import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/session_form_container';
import NewProjectFormContainer from './project/new_project_form_container';
import EditProjectContainer from './project/edit_project_form_container'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser
  if(currentUser) {
    replace('/')
  }
}

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" onEnter={(store) => _redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/login" onEnter={(store) => _redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/projects/new" component={NewProjectFormContainer} />
          <Route path="/projects/edit/:projectId" component={EditProjectContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
