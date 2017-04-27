import React from 'react';

class PledgeLogInCheck extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div>

        </div>
    );
  }
  }
}
