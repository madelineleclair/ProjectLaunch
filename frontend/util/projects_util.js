export const getProject = (id, pageType) => {
  return $.ajax({
    type: "GET",
    url: `api/projects/${id}`,
    data: { pageType }
  });
};

export const createProject = (project) => {
  return $.ajax({
    type: "POST",
    url: 'api/projects',
    data: { project },
  });
};

export const updateProject = (project) => {
  return $.ajax({
    type: "PATCH",
    url: `api/projects/${project.id}`,
    contentType: false,
    processData: false,
    data: project
  });
};

export const launchProject = (project) => {
  return $.ajax({
    type: "PATCH",
    url: `api/projects/${project.id}`,
    data: { project },
  });
}

export const fetchStory = (project_id) => {
  return $.ajax({
    type: "GET",
    url: `api/stories/${project_id}`,
    data: { project_id }
  });
};

export const createStory = (story) => {
  debugger
  return $.ajax({
    type: "POST",
    url: 'api/stories',
    contentType: false,
    processData: false,
    data: story
  });
};

export const updateStory = (story) => {
  return $.ajax({
    type: "PATCH",
    url: `api/stories/${story.id}`,
    contentType: false,
    processData: false,
    data: story
  });
};

export const fetchRewards = (project_id) => {
  return $.ajax({
    type: "GET",
    url: `api/rewards`,
    data: {project_id}
  });
};

export const createReward = (reward) => {
  return $.ajax({
    type: "POST",
    url: 'api/rewards',
    data: { reward }
  });
};

export const updateReward = (reward) => {
  return $.ajax({
    type: "PATCH",
    url: `api/rewards/${reward.id}`,
    data: { reward }
  });
};

export const deleteReward = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `api/rewards/${id}`,
  });
};

export const fetchAlmostFunded = (fetchType) => {
  return $.ajax({
    type: "GET",
    url: 'api/projects',
    data: {fetchType}
  });
};

export const fetchContributions = (project_id) => {
  return $.ajax({
    type: "GET",
    url: 'api/contributions',
    data: {project_id}
  });
};

export const fetchContribution = (contribution) => {
  return $.ajax({
    type: "POST",
    url: 'api/contributions',
    data: {contribution}
  });
};
