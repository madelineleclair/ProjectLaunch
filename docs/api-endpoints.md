# API Endpoints
## HTML API
 `GET /`
  - loads React web app

## JSON API
### Users
- `POST api/users`

### Session
- `POST api/session`
- `DELETE api/session`

### Projects
- `POST api/projects`
- `DELETE api/projects/:id`
- `UPDATE api/projects/:id`
- `GET api/projects/:id`
- `GET api/projects`

### Rewards
- `POST api/projects/:id/rewards`

### Stories
- `POST api/projects/:id/stories`
- `GET api/projects/:id/stories`
  - retrieve all story information

### Pledges
- `POST api/projects/:id/pledges`
  - adds pledge to database
- `GET api/projects/:id/pledges`
  - retrieve all pledges for a specific project

### Categories
- `GET api/categories`
