# API Endpoints
## HTML API
 `GET /`
  - Loads React web app

## JSON API
### Users
- `POST api/users`

### Session
- `POST api/session`
- `DELETE api/session`

### Projects
- `POST api/projects`
  - Creates project based on initial info. Project will not appear on index or have a show page until it is launched
- `DELETE api/projects/:id`
- `UPDATE api/projects/:id`
  - Allows owner to input missing project information and launch project
- `GET api/projects/:id`
  - Retrieves a specific project
- `GET api/projects`

### Rewards
- `POST api/projects/:id/rewards`

### Stories
- `POST api/projects/:id/stories`
- `GET api/projects/:id/stories`
  - Retrieves all story information

### Pledges
- `POST api/projects/:id/pledges`
  - Adds pledge to database
- `GET api/projects/:id/pledges`
  - Retrieves all pledges for a specific project

### Categories
- `GET api/categories`
