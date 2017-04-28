export const CHANGE_SEARCH_BAR_STATUS  = "CHANGE_SEARCH_BAR_STATUS";

export const changeSearchBarStatus = (search) => {
  return {
    type: CHANGE_SEARCH_BAR_STATUS,
    search
  };
};
