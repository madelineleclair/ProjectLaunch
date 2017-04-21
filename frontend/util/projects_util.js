export const getProject = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/projects/${id}`,
  })
}

export const createProject = (project) => {
  return $.ajax({
    type: "POST",
    url: 'api/projects',
    data: { project },
  });
}
