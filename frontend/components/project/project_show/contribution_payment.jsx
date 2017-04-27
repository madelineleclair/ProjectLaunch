import React from 'react';

class CreateContribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card_number: "", name: "", experation_day:"", experation_year: "", security_code: "" };
  }

  //make a call to componentDidMount that fetches a slice of state to hold contribution.

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
