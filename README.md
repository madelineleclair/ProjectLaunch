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
  ### Project Creation

  The main feature of Project Launch is allowing users to create and display projects. Project information is held in the database in four different tables: Projects, Stories, Rewards, Contributions. The Projects table contains a boolean column called Launch. When a project is first created, this column defaults to false. Projects will not be seen by Project Launch visitors unless a project's owner clicks the launch button. This provides users with the ability to update and perfect their projects without having to worry about wasting their campaign days.

  One of the main features of project creation is the ability to create and delete rewards. Rewards are a main component of Project Launch because they entice users to contribute to a project. Features can be created and deleted in real time. Individual rewards are created via a form. Once the reward has been created in rails, the information is added to the rewards object in the project slice of state. Rewards are held in state as an object for fast insertion and deletion.

  ```js
  const deleteReward = () => {
    props.deleteReward(props.reward.id)
  }

  const date = moment(props.reward.delivery_date).format('MM-YYYY');
  return (
    <li className="current-rewards">
        <section className="reward-number">
          <label>Reward #{props.number + 1}</label>
        </section>
        <section className="current-reward-info">
          <img onClick={deleteReward} src="https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/close-browser.png" />
          <h3>Pledge ${props.reward.pledge_amount} or more</h3>
          <h4>{props.reward.title}</h4>
          <p>{props.reward.description}</p>
          <p>ESTIMATED DELIVERY</p>
          <h5>{date}</h5>
        </section>
    </li>
  );
};
  ```

  ### Project Display and Search
  Once a project had been launched, it can be found via the search bar or the home page. The home page filters projects based on specific criteria. For example, the almost funded category finds the top three launched projects that have not been completely funded yet. Filtering out projects is accomplished with Active Record.

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
  All information about almost funded projects is held in the projects slice of state in redux under the subcategory of almost funded. Visitors also have the ability to search for projects by key words in the title, location, and category. Searching is accomplished using pg_search. Once a user inputs the search term and hits enter, he/she is redirected to the search results page.

  ## Future Features For Production
    ### Contributions
      Allow users to select multiple rewards to contribute to a project.

    ### Categories
      Make a list of categories on the front page that links to a page with all the projects in a category and shows the top project per category on the home page.

    ### Most popular projects
      Display most popular projects, by number of contributions on home page

    ### User projects
      Allow users to see all of their projects

    ### Videos
      Replace the main image on the project show page with a video
