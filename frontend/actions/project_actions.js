import * as ProjectUtil from '../util/projects_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const RECEIVE_ALMOST_FUNDED = "ALMOST_FUNDED";
export const RECEIVE_CONTRIBUTIONS = "RECEIVE_CONTRIBUTIONS"

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

const receiveAlmostFunded = (projects) => {
  return {
    type: RECEIVE_ALMOST_FUNDED,
    projects
  }
}

const receiveContributions = (contributions) => {
  return {
    type: RECEIVE_CONTRIBUTIONS,
    contributions
  }
}

export const getProject = (id, pageType = false) => (dispatch) => {
  return ProjectUtil.getProject(id, pageType).then((project) =>
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
  return ProjectUtil.createReward(reward).then((reward) =>
    dispatch(receiveReward(reward))
  );
};

export const updateReward = (reward) => (dispatch) => {
  return ProjectUtil.updateReward(reward).then((reward) => {
    dispatch(receiveReward(reward));
  });
};

export const fetchAlmostFunded = (fetchType) => (dispatch) => {
  return ProjectUtil.fetchAlmostFunded(fetchType).then((projects) => {
    dispatch(receiveAlmostFunded(projects))
  });
};

export const fetchContributions = (project_id) => (dispatch) => {
  return ProjectUtil.fetchContributions(project_id).then((contributions) => {
    dispatch(receiveContributions(contributions))
  });
}
