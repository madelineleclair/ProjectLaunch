import React from "react";
import RewardInfo from './reward_info'
import DisplayErrors from './display_errors';

class RewardsInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rewards: [], title: "", pledge_amount: 0, description: "", number_available: null, delivery_date: "", project_id: this.props.projectId,
      limitedAvailability: false };
    this.enableRewardLimit = this.enableRewardLimit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePledgeAmount = this.handlePledgeAmount.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleDeliverDate = this.handleDeliverDate.bind(this);
    this.handleRewardLimit = this.handleRewardLimit.bind(this);
    // this.setState = this.setState.bind(this)
  }

  componentDidMount() {
    this.props.fetchRewards(this.props.projectId).then(({rewards}) => {
      this.setState({rewards})
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    const rewards = nextProps.rewards
    this.setState({ rewards })
  }

  enableRewardLimit() {
    if (this.state.limitedAvailability) {
      this.setState({limitedAvailability: false});
    } else {
      this.setState({limitedAvailability: true});
    }
  }


  handleTitle(e) {

    const title = e.target.value
    this.setState({title})
  }

  handlePledgeAmount(e) {
    const pledge_amount = e.target.value;
    this.setState({pledge_amount});
  }

  handleDescription(e) {
    const description = e.target.value;
    this.setState({description});
  }

  handleDeliverDate(e) {
    const delivery_date = e.target.value
    this.setState({delivery_date})
  }

  handleRewardLimit(e) {
    const number_available = e.target.value;
    this.setState({number_available})
  }

  //not causing a rerender of rewards...why??? Component will receive props will automatically update it but it is not hitting component will receive props until refresh
  handleCreate(e) {
    const _defaultState = { title: "", pledge_amount: 0, description: "", number_available: null, delivery_date: "", limitedAvailability: false, project_id: this.props.projectId };

    e.preventDefault()
    this.props.createReward(this.state).then((action) => {
      //this is not the rewards, so this.setState is not happening
      this.setState({_defaultState})
    });
  }

  render() {

    const rewards = this.props.rewards.map((reward, index) => {
      return <RewardInfo key={reward.id} reward={ reward } deleteReward={this.props.deleteReward} number={ index }/>
    })
    let rewardLimit;

    if (this.state.limitedAvailability) {
      rewardLimit = <input onChange={this.handleRewardLimit} type="number" value={this.state.number_available || 0} />
    } else {
      rewardLimit = <button onClick={this.enableRewardLimit}>Enable reward limit</button>
    };

  // const saveButton = this.state.save ? <button onClick={this.handleCreate}>Save</button> : <div></div>

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
            <div className="title-and-inputs">
              <label>Reward #{rewards.length + 1}</label>
              <section className="create-rewards-input-fields">
                {<DisplayErrors errors={this.props.errors} />}
                <div className="create-reward-title">
                  <label>Title</label>
                  <input onChange={this.handleTitle} type="text" value={this.state.title} />
                </div>
                <div className="create-reward-amount">
                  <label>Pledge amount</label>
                  <input onChange={this.handlePledgeAmount} type="number" value={ this.state.pledge_amount } />
                </div>
                <div className="create-reward-description">
                  <label>Description</label>
                  <textarea onChange={this.handleDescription} value={this.state.description} />
                </div>
                <div className="create-reward-delivery-date">
                  <label>Estimated delivery</label>
                  <input onChange={this.handleDeliverDate} type="date" />
                </div>
                <div className="limited-availability">
                  <label>Limited availability</label>
                  { rewardLimit }
                </div>
              </section>
            </div>
              <button className="add-reward-button" onClick={this.handleCreate}>
                <p>+</p>
                <p>Add a new reward</p>
              </button>
          </form>
        </div>
      </div>
    )
  }
}

export default RewardsInfoForm;

// <div className="save-button">
//   {saveButton}
// </div>
