export const getProject = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/projects/${id}`,
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
  return $.ajaxy({
    type: "PATCH",
    url: `api/projects/${project.id}`,
    data: { project }
  });
};

export const fetchStory = (project_id) => {
  return $.ajax({
    type: "GET",
    url: `api/stories/${project_id}`,
    data: { project_id }
  });
};
