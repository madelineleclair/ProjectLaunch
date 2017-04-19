import React from "react";
import { withRouter } from 'react-router';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGuest = this.handleGuest.bind(this)
  }

  //not sure if I want to clear the errors when it mounts, should it only clear when it update?

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.formType !== nextProps.formType){
      this.props.clearErrors();
    }
  }

  handleEmail(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  handlePassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state).then(() => {this.props.router.push('/');});
  }

  handleGuest(e) {
    this.setState({email:'guest@gmail.com', password: "password"});
  }

  render() {
    const errors = this.props.errors.map((error) => {
      return (<li>{error}</li>);
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleEmail} type="text" placeholder="Email" value={this.state.email}/>
          <input onChange={this.handlePassword} type="text" placeholder="Password" value={this.state.password}/>
          <button>Log me in!</button>
        </form>
        <button onClick={this.handleGuest}>Guest log in</button>

        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}

export default LogInForm;
