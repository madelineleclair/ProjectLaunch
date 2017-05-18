import React from 'react';
import { hashHistory } from 'react-router';
import TransactionInfo from './payment_show';


class CreateContribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card_number: "", name: "", email_address: "",
      experation_day:"", experation_year: "", security_code: "",
      project_id: this.props.basicInfo.id,
      reward_id: this.props.reward,
      amount: this.props.amount };
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleExpirationMonth = this.handleExpirationMonth.bind(this);
    this.handleExpirationYear = this.handleExpirationYear.bind(this);
    this.handleSecurityCode = this.handleSecurityCode.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillUnmount() {
    this.props.clearPendingTransactions();
    this.props.clearErrors();
  }

  handleCardNumber(e) {
    const card_number = e.target.value;
    this.setState({ card_number });
  }

  handleName(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  handleEmail(e) {
    const email_address = e.target.value;
    this.setState({ email_address });
  }

  handleExpirationMonth(e) {
    const experation_month = e.target.value;
    this.setState({ experation_month });
  }

  handleExpirationYear(e) {
    const experation_year = e.target.value;
    this.setState({ experation_year });
  }

  handleSecurityCode(e) {
    const security_code = e.target.value;
    this.setState({ security_code });
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.createContribution(this.state).then(() => {
      hashHistory.push(`/projects/${this.state.project_id}`);
    });
  }

  render() {
    const years = [];
      for (let i = 2017; i < 2037; i++) {
        years.push(<option key={i} value={i}>{i}</option>);
      }

      const errors = this.props.errors.map((error, index) => {

        return (<li key={ index }>{ error }</li>);
      });

      return (
        <div className="payment-form-container">
          <div className="title-and-owner">
            <h1>{this.props.basicInfo.title}</h1>
            <h3>by {this.props.basicInfo.owner}</h3>
          </div>
          <div className="card-form-and-transaction-info">
            <div className="card-form-and-caption">
              <h3>Add card information</h3>
              <form className="payment-info-form">
                <ul className="payment-errors">
                  {errors}
                </ul>
                <div>
                  <h4>Card number</h4>
                  <input type="number" onChange={ this.handleCardNumber } value={this.state.card_number}/>
                </div>
                <div>
                  <h4>Name</h4>
                  <input onChange={ this.handleName } value={this.state.name} />
                </div>
                <div>
                  <h4>Email</h4>
                  <input onChange={ this.handleEmail } value={ this.state.email } />
                </div>
                <div className="expiration-and-security">
                  <div>
                    <h4>Expiration</h4>
                    <select onChange={ this.handleExpirationMonth}>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select onChange={ this.handleExpirationYear}>
                      {years}
                    </select>
                  </div>
                  <div className="security-code">
                    <h4>Security Code</h4>
                    <input type="number" onChange={ this.handleSecurityCode } value={ this.state.security_code } />
                  </div>
                </div>
                <div className="button-container">
                  <button onClick={this.handleSubmit}>Pledge</button>
                </div>
              </form>
            </div>
            <TransactionInfo reward = {this.props.rewardInfo} amount = {this.props.amount}/>
          </div>
        </div>
    );
  }
}

export default CreateContribution;
