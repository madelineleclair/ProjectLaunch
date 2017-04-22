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
        <ul>
          { rewards }
        </ul>
        <form className="add-reward-form">
          <label>Title
            <input type="text" value={this.state.title} />
          </label>

          <label>Pledge amount
            <input type="number" value={ this.state.pledge_amount } />
          </label>
          <label>Description
              <textarea value={this.state.description} />
          </label>
          <label>Estimated delivery or date
            <input type="date" />
          </label>
          <label>Limited availability
            <button onClick={this.enableRewardLimit}>Enable reward limit</button>
            { rewardLimit }
          </label>
        </form>
        <button onClick={this.handleSave}>Add a new reward</button>
        <section className="save-button">
          <div>
            {saveButton}
          </div>
        </section>
      </div>
    )
  }
}

export default RewardsInfoForm;
