== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.

# Product Launch

[Product Launch](https://project-launch.herokuapp.com/)

Product Launch is a full stack web application inspired by Kickstarter for people and companies to create and fund their projects. It uses Ruby on Rails on the backend, a PostgreSQL database, React.js with Redux for the frontend and a multiple outside libraries, such as React-Slick and pg_earch, to provide additional functionality and improve user experience.

## Main Features
  ### Project Implementation

  The main feature of Project Launch is allowing users to create and display projects. Project information is held in the database in four different tables: Projects, Stories, Rewards, Contributions. The Projects table contains a boolean column called Launch. When a project is first created, this column defaults to false. Projects will not be seen by Project Launch visitors unless a project's owner clicks the launch button. This provides users with the ability to update and perfect their projects without having to worry about wasting their campaign days.

  Once a project had been launched, it can be found via the search bar or the home page. The home page filters projects based on specific criteria. For example, the almost funded category finds the top three launched projects that have not been completely funded yet. Filtering out projects is accomplished with Active Record queries.

  ```ruby
  Project.select(:id, :title, :description,
  :location, :goal, :launch_date, :duration,
  'users.name as owner', 'sum(amount) as funding',
  :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
  .joins(:contributions, :user)
  .group("projects.id", 'users.name')
  .where('launch = true', 'goal > funding')
  .order('funding DESC').limit(3)
  ```
  All information about almost funded projects is held in the projects slice of state in redux under the subcategory of almost funded. 
