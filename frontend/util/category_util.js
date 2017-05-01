export const fetchCategories = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/categories'
  });
};
