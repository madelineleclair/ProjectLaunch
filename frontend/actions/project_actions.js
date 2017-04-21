import * as ProjectUtil from '../util/projects_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_STORY = "RECEIVE_STORY";

const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

const receiveStory = (story) => {
  return {
    type: RECEIVE_STORY,
    story
  };
};

export const getProject = (id) => (dispatch) => {
  return ProjectUtil.getProject(id).then((project) =>
    dispatch(receiveProject(project)));
};

export const createProject = (project) => (dispatch) => (ProjectUtil.createProject(project).then((project) => dispatch(receiveProject(project))));

export const fetchStory = (project_id) => (dispatch) => {
  return ProjectUtil.fetchStory(project_id).then((story) =>
    dispatch(receiveStory(story))
  );
};

export const updateProject = (project) => (dispatch) => {
  return ProjectUtil.updateProject(project).then((project) => {
    dispatch(receiveProject(project));
  });
};

export const createStory = (story) => (dispatch) => {
  return ProjectUtil.createStory(story).then((story) => {
    dispatach(receiveStory(story));
  });
};

export const updateStory = (story) => (dispatch) => {
  return ProjectUtil.updateStory(story).then((story) => {
    dispatch(receiveStory(story));
  });
};
