import React from 'react';
import ProgressBar from './progress_bar';
import moment from 'moment';

const MiniProjectItem = (props) => {
  const project = props.project;
  const remainingTime = moment(project.launch_date).add(project.duration, 'days').fromNow(true);

  return (
    <li className="mini-project-container">
      <div className='mini-project-image'>
        <img src={project.image_url} />
      </div>
      <section className="mini-project-text">
        <h4>{project.title}</h4>
        <p>{project.owner}</p>
        <p>{project.description}</p>
      </section>
      <section className="location-and-funding">
        <div className="mini-project-location">
          <img src={window.location_icon} />
          <p>{project.location}</p>
        </div>
        <ProgressBar goal={project.goal} funding={project.funding} />
        <section className="percentage-funded">
          <div>{(props.project.funding / props.project.goal * 100)}%</div>
          <div>funded</div>
        </section>
        <section className="pledged">
          <div>${props.project.funding}</div>
          <div>pledged</div>
        </section>
        <section className="days-to-go">
          <div>{remainingTime}</div>
          <div>remaining</div>
        </section>
      </section>
    </li>
  );
};

export default MiniProjectItem;
