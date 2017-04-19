import React from "react";
import { Link } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGuest = this.handleGuest.bind(this)
  }

//must be a way for when you refresh to have errors persist, maybe bootstrapping errors to the window. in componentWillUnmount

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.formType !== nextProps.formType){
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
    this.props.signUp(this.state).then(() => {this.props.router.push('/');});
  }
  // send an ajax call to the backend to log them in, then bootstrap to the window
  handleGuest() {
    this.props.logIn({email: "guest@gmail.com", password: "password"})
    .then(() => {this.props.router.push('/');});
  }

  render() {
    const errors = this.props.errors.map((error) => {
      return (<li>{error}</li>);
    })
    return (
      <div className="sign-up">
        <section className="have-account">
          <section>{"Have an account? "}
            <Link to="/login">Log in</Link>
          </section>
        </section>
        <section className="make-account">
            <h2>Sign up</h2>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <input onChange={this.handleName} type="text" placeholder="Name" value={this.state.name} />
              <input onChange={this.handleEmail} type="text" placeholder="Email" value={this.state.email}/>
              <input onChange={this.handlePassword} type="text" placeholder="Password" value={this.state.password}/>
              <button className="sign-up-button" >Create account</button>
              <button className="guest-button" onClick={this.handleGuest}>Guest log in</button>
            </form>
        </section>

        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}

export default (SignUpForm);
