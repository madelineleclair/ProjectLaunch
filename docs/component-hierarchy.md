
### Containers

#### Home Container
  - Landing picture component
  - Projects we love component
    + Mini project component
      - Display basic information about the the project, such as picture, title,
      description, percentage funded, and amount pledged
  - Almost funded component
    + Mini project component
      - Display basic information about the the project, such as picture, title,
      description, percentage funded, and amount pledged
  - Popular projects
    + Mini project component
      - Display basic information about the the project, such as picture, title,
      description, percentage funded, and amount pledged

#### Auth Container
  - Auth component

#### Main Navigation Bar Container
  - Nav bar component
  - Session component
  - Search component
  - Explore component
    - Have links to the category component for each category

#### Categories Container
  - Category component
    + Almost funded component
      + Mini project component
        - Display basic information about the the project, such as picture, title,
        description, percentage funded, and amount pledged
    + Popular projects
      + Mini project component
        - Display basic information about the the project, such as picture, title,
        description, percentage funded, and amount pledged

#### Project Container
  - Project component
  - User component
  - Pledge component
  - Contribute component

#### Create Project Container
  - Create project component

#### Edit Project Container
  - Basics component
    + Will only be rendered on click
  - Create rewards component
    + Will only be rendered on click
  - Story component
    + Will only be rendered on click

### Routes
Path               | Component
-------------------|----------
/                  | Home Container
/sign-up           | Auth Container
/sign-in           | Auth Container
/projects          | Home Container
/projects/:id      | Project Container
/start             | Create Project Container
/projects/:id/edit | Edit Project Container
/category/:id      | Category Container
