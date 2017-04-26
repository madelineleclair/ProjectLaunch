import React from 'react';
import FundingStatus from './funding_status';
import RewardsShowList from './rewards_show_list'

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const projectId = this.props.projectId;
    this.props.getProject(projectId, "projects_show");
    this.props.fetchStory(projectId);
    this.props.fetchRewards(projectId);
    this.props.fetchContributions(projectId);
  }

  render() {
    let fundingStatus;

    if (this.props.contributionsInfo) {
      fundingStatus = <FundingStatus basicInfo={this.props.basicInfo}
        contributionsInfo={this.props.contributionsInfo}/>;
    }

    const rewards = Object.values(this.props.rewards).map((reward) => {
      return <RewardsShowList reward={ reward }/>;
    });

    return (
      <div>
        <section className="project-intro">
          <div className="owner-and-title">
            <div className="owner-info">
              <img src={this.props.basicInfo.owner_image} />
              <span>
                <p>By</p>
                <p>{this.props.basicInfo.owner}</p>
              </span>
            </div>
            <section className="title-and-description">
              <h2>{this.props.basicInfo.title}</h2>
              <h3>{this.props.basicInfo.description}</h3>
            </section>
          </div>
          <section className="main-video-and-funding">
            <img src={this.props.basicInfo.image_url} />
              { fundingStatus }
          </section>
        </section>
        <section className="about-and-support-project">
          <section className="about-project">
            Info about project hahdfhfklsafdhksah
          </section>
          <section className="rewards-show-list">
            <h1>Support this project</h1>
            <ul>
              {rewards}
            </ul>
          </section>
        </section>
      </div>
    )
  }
}

export default ProjectShow;








//   <div>
//     <section className="project-intro">
//       <div className="owner-icon-and-title">
//         <img src={this.props.basicInfo.owner_image} />
//         <h2>{this.props.basicInfo.title}</h2>
//       </div>
//       <div className="owner-name-and-description">
//         <span>
//           <p>By</p>
//           <p>{this.props.basicInfo.owner}</p>
//         </span>
//         <h3>{this.props.basicInfo.description}</h3>
//       </div>
//     </section>
//   </div>
// )
