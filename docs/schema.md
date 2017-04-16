# Schema Information

## users
column name      | data type | details
-----------------|-----------|-----------
id               | integer   | not null, primary key
name             | string    | not null, indexed unique
email            | string    | not null, indexed unique
password_digest  | string    | not null
session_token    | string    |
timestamps       |           |

## projects
column name       | data type | details
-------------------|-----------|-----------
id                 | integer   | not null, primary key
type               | string    | not null
title              | string    | not null
country            | string    | not null
user_id            | integer   | not null, indexed
photo_id           | integer   | not null, indexed
description        | text      | not null
category           | text      | not null
subcategory        | text      |
location           | string    | not null
goal               | integer   | not null
launch             | boolean   | default false
duration (either number of days or end on a date and time)
collaborators     |            | default []
timestamps


## collaborators (send invite and then they accept)
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
user_id     | integer   | not null, indexed
title       | string    | not null
permission  |           | default []
accepted    | boolean   | default false  
timestamps  

## project_photos (the main image associated with the project. is this suppose to be camel or snake? check rails test. double check how to do this)
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
name        | string    | not null
data        | binary    | not null
filename    | string    | not null
mime_type   | string    | not null (needed)
project_id  | integer   | not null, indexed

## rewards
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
title       | string    | not null
pledge_amount | integer | not null, default 0
description | text      | not null
estimated_delivery_month | string | not null,
estimated_delivery_year | integer | not null
shipping_details  | string | not null
limit availability | boolean |

## limit_availabilities
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
rewards_id  | integer   |
backer      | integer   |
start_date  | date      |
end_date    | date      |

## stories
column name   | data type | details
--------------|-----------|-----------
id            | integer   | not null, primary key
project_id    | integer   | not null, indexed
project_video | integer | indexed
description | text | not null
risks_and_challenges | text | not null


## help_requests
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
description | text |

## funds
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
user_id     | integer   | not null, indexed
amount      | integer   | not null  
