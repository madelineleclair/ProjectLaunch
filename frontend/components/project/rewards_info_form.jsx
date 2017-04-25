import React from "react";
import RewardInfo from './reward_info'

class RewardsInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rewards: [], title: "", pledge_amount: 0, description: "", number_available: null, delivery_date: "", limitedAvailability: false, save: false};
    this.enableRewardLimit = this.enableRewardLimit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchRewards(this.props.projectId).then(({rewards}) => {
      this.setState({rewards})
    })
  }

  componentWillReceiveProps(nextProps) {
    const rewards = nextProps.rewards
    this.setState({ rewards })
  }

  enableRewardLimit() {
    if (limitedAvailability) {
      this.setState({limitedAvailability: false});
    } else {
      this.setState({limitedAvailability: true});
    }
  }

  handleSave(e) {
    const save = true
    this.setState({save})
  }

  handleCreate(e) {
    _defaultState = {rewards: [], title: "", pledge_amount: 0, description: "", number_available: null, delivery_date: "", limitedAvailability: false, save: false};

    e.preventDefault()
    this.props.createReward(this.state).then(() => {
      this.setState(_defaultState)
    })
  }

  render() {
    const rewards = this.props.rewards.map((reward, index) => {
      return <RewardInfo key={reward.id} reward={ reward } number={ index }/>
    })

    const rewardLimit = this.state.limitedAvailability ? <input type="number" value={this.state.number_available} /> : <div />

  const saveButton = this.state.save ? <button onClick={this.handleCreate}>Save</button> : <div></div>

    return(
      <div className="rewards-info-container">
        <div className="rewards-caption">
          <h1>Create great rewards for your supporters</h1>
          <p>Entice backers to contribute to your cause by offering exclusive products and experiences</p>
        </div>
        <div className="rewards-and-form">
          <ul>
            { rewards }
          </ul>
          <form className="add-reward-form">
            <div className="create-reward-title">
              <label>Title</label>
              <input type="text" value={this.state.title} />
            </div>
            <div className="create-reward-amount">
              <label>Pledge amount</label>
              <input type="number" value={ this.state.pledge_amount } />
            </div>
            <div className="create-reward-description">
              <label>Description</label>
              <textarea value={this.state.description} />
            </div>
            <div className="create-reward-delivery-date">
              <label>Estimated delivery</label>
              <input type="date" />
            </div>
            <div className="limited-availability">
              <label>Limited availability</label>
              <button onClick={this.enableRewardLimit}>Enable reward limit</button>
              { rewardLimit }
            </div>
          </form>
          <button className="add-reward-button" onClick={this.handleSave}>
            <p>+</p>
            <p>Add a new reward</p>
          </button>
            <div className="save-button">
              {saveButton}
            </div>
        </div>
      </div>
    )
  }
}

export default RewardsInfoForm;
