import * as ProjectUtil from '../util/projects_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_REWARDS = "RECEIVE_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";
export const REMOVE_REWARD = "REMOVE_REWARD";
export const RECEIVE_ALMOST_FUNDED = "ALMOST_FUNDED";
export const RECEIVE_CONTRIBUTIONS = "RECEIVE_CONTRIBUTIONS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CONTRIBUTION = "RECEIVE_CONTRIBUTION";
export const CLEAR_REWARDS = "CLEAR_REWARDS";

const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
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

const removeReward = (reward) => {
  return {
    type: REMOVE_REWARD,
    reward
  };
};

export const clearRewards = () => {
  return {
    type: CLEAR_REWARDS,
    reward: {}
  };
};

const receiveAlmostFunded = (projects) => {
  return {
    type: RECEIVE_ALMOST_FUNDED,
    projects
  };
};

const receiveContributions = (contributions) => {
  return {
    type: RECEIVE_CONTRIBUTIONS,
    contributions
  };
};

const receiveContribution = (contribution) => {
  return {
    type: RECEIVE_CONTRIBUTION,
    contribution
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: RECEIVE_ERRORS,
    errors: []
  };
};


export const getProject = (id, pageType = false) => (dispatch) => {
  return ProjectUtil.getProject(id, pageType).then((project) =>
    dispatch(receiveProject(project)));
};

export const createProject = (project) => (dispatch) => (
  ProjectUtil.createProject(project).then((project) =>
  dispatch(receiveProject(project)), (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchStory = (project_id) => (dispatch) => {
  return ProjectUtil.fetchStory(project_id).then((story) =>
    dispatch(receiveStory(story)), (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateProject = (project) => (dispatch) => {
  return ProjectUtil.updateProject(project).then((project) => {
    dispatch(receiveProject(project));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const launchProject = (project) => (dispatch) => {
  return ProjectUtil.launchProject(project).then((project) => {
    dispatch(receiveProject(project));
  });
};

export const createStory = (story) => (dispatch) => {
  return ProjectUtil.createStory(story).then((story) => {
    dispatch(receiveStory(story));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateStory = (story) => (dispatch) => {
  return ProjectUtil.updateStory(story).then((story) => {
    dispatch(receiveStory(story));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchRewards = (project_id) => (dispatch) => {
  return ProjectUtil.fetchRewards(project_id).then((rewards) =>
  dispatch(receiveRewards(rewards)));
};

export const createReward = (reward) => (dispatch) => {

  return ProjectUtil.createReward(reward).then((reward) =>
    dispatch(receiveReward(reward)), (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deleteReward = (id) => (dispatch) => {
  return ProjectUtil.deleteReward(id).then((reward) =>
    dispatch(removeReward(reward)))};

export const updateReward = (reward) => (dispatch) => {
  return ProjectUtil.updateReward(reward).then((reward) => {
    dispatch(receiveReward(reward));
  }, (errors) => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchProjects = (fetch) => (dispatch) => {
  return ProjectUtil.fetchProjects(fetch).then((projects) => {
    return dispatch(receiveProjects(projects));
  });
};

export const fetchAlmostFunded = (fetch) => (dispatch) => {
  return ProjectUtil.fetchProjects(fetch).then((projects) => {
    dispatch(receiveAlmostFunded(projects));
  });
};

export const fetchContributions = (project_id) => (dispatch) => {
  return ProjectUtil.fetchContributions(project_id).then((contributions) => {
    dispatch(receiveContributions(contributions));
  });
};

export const createContribution = (contribution) => (dispatch) => {
  return ProjectUtil.createContribution(contribution).then((contribution) => {
    dispatch(receiveContribution(contribution));
  },(errors) => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
