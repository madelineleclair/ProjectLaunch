import React from "react";
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.formType !== nextProps.formType){
      this.setState({name: "", email: "", password: ""});
      this.props.clearErrors();
    }
  }

  handleName(e) {
    const name = e.target.value;
    this.setState({ name });
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
    let user;

    if (this.props.formType === "signUp") {
      user = this.state;
    } else {
      user = { email: this.state.email, password: this.state.password };
    }

    this.props.action(user).then(() => {this.props.router.push('/');});
  }
  // send an ajax call to the backend to log them in, then bootstrap to the window
  handleGuest() {
    this.props.logIn({email: "guest@gmail.com", password: "password"})
    .then(() => {this.props.router.push('/');});
  }

  render() {
    const errors = this.props.errors.map((error, index) => {
      return (<li key={index}>{error}</li>);
    });

    let header;
    let nameField;
    let haveAccount;
    let submitButton;

    if (this.props.formType === "signUp") {
      nameField = <input onChange={this.handleName} type="text" placeholder="Name" value={this.state.name} />;
      header = "Sign up";
      haveAccount = (<section className="have-account">Have an account?
                      <Link to="/login">Log in</Link>
                    </section>);
      submitButton = "Create account";
    } else {
      nameField = <section />;
      header = "Log in";
      haveAccount = (<section className="have-account">New to Project Launch?
                      <Link to="/signup">Sign up!</Link>
                    </section>);
      submitButton = "Log me in!";
    }

    return (
      <div className="session-container">
        <div className="sign-up-or-log-in">
          { haveAccount }
          <section className="session">
            <h2>{ header }</h2>
            <ul>
              <div>
                {errors}
              </div>
            </ul>
            <form className="session-form" onSubmit={this.handleSubmit}>
              { nameField }
              <input onChange={this.handleEmail} type="text" placeholder="Email" value={this.state.email}/>
              <input onChange={this.handlePassword} type="password" placeholder="Password" value={this.state.password}/>
              <button className="submit-button" >{ submitButton }</button>
            </form>
            <button className="guest-button" onClick={this.handleGuest}>Guest log in</button>
          </section>
        </div>
      </div>
    );
  }
}

export default (SessionForm);
