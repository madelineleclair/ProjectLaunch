export const signUp = (user) => {
  return $.ajax({
    type: "POST",
    url: "api/users",
    data: { user }
  });
};

export const logIn = (user) => {
  return $.ajax({
    type: "POST",
    url: "api/session",
    data: { user }
  });
};

export const logOut = () => {
  return $.ajax({
    type: "DELETE",
    url: "api/session"
  });
};
