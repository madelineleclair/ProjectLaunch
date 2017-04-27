import React from 'react';
import moment from 'moment';
import { Link } from 'react-router'

class RewardsShowList extends React.Component {
  constructor(props) {
    super(props);
    this.reward = props.reward;
    this.state = { selected: false, amount: 0, id: this.reward.id, project_id: this.props.projectId };
    this.deliveryDate = moment(this.reward.delivery_date).format('MM-YYYY');
    this.contribution_count = this.reward.contribution_count;
    this.backers = this.contribution_count === 1 ? "backer" : "backers";
    this.handleSelect = this.handleSelect.bind(this);
    this.updateContribution = this.updateContribution.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(e) {
    this.setState({ selected: true });
  }

  updateContribution(e) {
    const amount = e.target.value;
    this.setState({ amount });
  }
  //
  // handleSubmit(e) {
  //   this.props.createContribution(this.state)
  //   //this is for submitting contributions. I don't think you need to be a user to contribute. Oh, well, check anyway
  // }

  render() {
    debugger
    if (!this.state.selected) {
      return (
        <li key={ this.reward.id } onClick={this.handleSelect} className="rewards-list-item-not-selected">
          <div>Select this reward</div>
          <h2>Pledge ${ this.reward.pledge_amount } or more</h2>
          <h3>{ this.reward.title }</h3>
          <p>{ this.reward.description }</p>
          <div className="delivery-info">
            <p>ESTIMATED DELIVERY</p>
            <p>{ this.deliveryDate }</p>
          </div>
          <div className="contribution-count">
            <p>{ this.contribution_count }</p>
            <p>{ this.backers }</p>
          </div>
        </li>
      );
    } else {
      return (
        <li key={ this.reward.id } className="rewards-list-item-selected">
          <h2>Pledge ${ this.reward.pledge_amount } or more</h2>
          <h3>{ this.reward.title }</h3>
          <p>{ this.reward.description }</p>
          <div className="delivery-info">
            <p>ESTIMATED DELIVERY</p>
            <p>{ this.deliveryDate }</p>
          </div>
          <div className="contribution-count">
            <p>{ this.contribution_count }</p>
            <p>{ this.backers }</p>
          </div>
          <form className="contribute">
            <input type="number" onChange={this.updateContribution} value={ this.reward.pledge_amount } />
            <Link to={`projects/${this.props.projectId}/contribution/new`}>
              <button>Contribute</button>
            </Link>
          </form>
        </li>
      );
    }

  }
}

export default RewardsShowList;
