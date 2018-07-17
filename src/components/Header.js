import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    siteName: PropTypes.string
  }

  render() {
    return (
          <header>
                <div className="wrap__logo">
                      <img src="images/JW_logo.svg" alt={this.props.siteName} className="logo"/>
                </div>
                <div className="wrap__intro">
                      <h1>{this.props.workBio}</h1>
                <p>{this.props.funBio}</p>
          <p>{this.props.socialMedia_Twitter}</p>
    <p>{this.props.socialMedia_LinkedIn}</p>
</div>
          </header>
    );
  }
};

export default Header;
