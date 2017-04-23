import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/session_form_container';
import NewProjectFormContainer from './project/new_project_form_container';
import EditProjectContainer from './project/edit_project_form_container'
import BasicInfoFormContainer from './project/basic_info_form_container'
import StoryInfoFormContainer from './project/story_info_form_container'
import RewardsInfoFormContainer from './project/rewards_info_form_container'
import HomePageContainer from './project/home_page/home_page_container'
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
          <IndexRoute component={ HomePageContainer } />
          <Route path="/signup" onEnter={(store) => _redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/login" onEnter={(store) => _redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/projects/new" component={NewProjectFormContainer} />
          <Route path="/projects/edit/:projectId" component={EditProjectContainer}>
            <Route path="/projects/edit/:projectId/basicInfo" component={BasicInfoFormContainer} />
            <Route path="/projects/edit/:projectId/storyInfo" component={StoryInfoFormContainer} />
            <Route path="/projects/edit/:projectId/rewardsInfo" component={RewardsInfoFormContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
