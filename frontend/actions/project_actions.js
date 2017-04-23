import * as ProjectUtil from '../util/projects_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";

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

const receiveRewards = (rewards) => {
  return {
    type: RECEIVE_REWARDS,
    rewards
  };
};

const receiveReward = (reward) => {
  return {
    type: RECEIVE_REWARD,
    reward
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

export const fetchRewards = (project_id) => (dispatch) => {
  return ProjectUtil.fetchRewards(project_id).then((rewards) =>
  dispatch(receiveRewards(rewards)));
};

export const createReward = (reward) => (dispatch) => {
  return ProjectUtil.createReward(reward).then((reward) => {
    dispatch(receiveReward(reward));
  });
};

export const updateReward = (reward) => (dispatch) => {
  return ProjectUtil.updateReward(reward).then((reward) => {
    dispatch(receiveReward(reward));
  });
};
