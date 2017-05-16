import React from 'react';
import ProgressBar from './progress_bar';
import moment from 'moment';
import { Link } from 'react-router';

class MiniProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.project = props.project;
    this.remainingTime = moment(this.project.launch_date).add(this.project.duration, 'days').fromNow(true);
  }

  render() {
    const funding = this.project.funding || "0"
    return (
        <li className="mini-project-container">
          <div className='mini-project-image'>
            <Link to={`projects/${this.project.project_id}`}>
              <img src={this.project.image_url} />
            </Link>
          </div>
          <section className="mini-project-text">
            <h4>{this.project.title}</h4>
            <p>{this.project.owner}</p>
            <p>{this.project.description}</p>
          </section>
          <section className="location-and-funding">
            <div className="mini-project-location">
              <img src={window.location_icon} />
              <p>{this.project.location}</p>
            </div>
            <ProgressBar goal={this.project.goal} funding={this.project.funding} />
            <section className="percentage-funded">
              <div>{(Math.round(this.project.funding / this.project.goal * 100))}%</div>
              <div>funded</div>
            </section>
            <section className="pledged">
              <div>${funding}</div>
              <div>pledged</div>
            </section>
            <section className="days-to-go">
              <div>{this.remainingTime}</div>
              <div>remaining</div>
            </section>
          </section>
        </li>
    );
  }
};

export default MiniProjectItem;
