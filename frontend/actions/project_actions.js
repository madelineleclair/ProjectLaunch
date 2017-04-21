import * as ProjectUtil from '../util/projects_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT"

const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  }
}

export const getProject = (id) => (dispatch) => {
  return ProjectUtil.getProject(id).then((project) => {
    dispatch(receiveProject(project));
  });
}

export const createProject = (project) => (dispatch) => (ProjectUtil.createProject(project).then((project) => dispatch(receiveProject(project))));
