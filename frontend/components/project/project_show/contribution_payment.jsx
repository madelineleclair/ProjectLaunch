import React from 'react';
import { hashHistory } from 'react-router';

class CreateContribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card_number: "", name: "", experation_day:"", experation_year: "",
      security_code: "", project_id: this.props.basicInfo.projectId, reward_id: this.props.reward };
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleExperationDay = this.handleExperationDay.bind(this);
    this.handleExperationYear = this.handleExperationYear.bind(this);
    this.handleSecurityCode = this.handleSecurityCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCardNumber(e) {
    const card_number = e.target.value ;
    this.setState({ card_number });
  }

  handleName(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  handleExperationDay(e) {
    const experation_day = e.target.value;
    this.setState({ experation_day });
  }

  handleExperationYear(e) {
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
    const years = []
      for (let i = 2017; i < 2037; i++) {
        years.push(<option value={i}>{i}</option>);
      }
      return (
        <div>
          <h1>{this.props.basicInfo.title}</h1>
          <h3>{this.props.basicInfo.owner}</h3>
          <form>
            <label>
              <h4>Card number</h4>
              <input value={this.state.card_number}/>
            </label>
            <label>
              <h4>Name</h4>
              <input value={this.state.name} />
            </label>
            <label>
              <h4>Email</h4>
              <input value="" />
            </label>
            <label>
              <h4>Experation</h4>
              <select>
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
              <select>
                {years}
              </select>
            </label>
            <label>
            <h4>Security Code</h4>
            <input value="" />
            </label>
          </form>
        </div>
    );
  }
}

export default CreateContribution;
