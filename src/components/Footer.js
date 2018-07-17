import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    siteName: PropTypes.string
  }

  render() {
    return (
          <footer>
                <p>Contact me: {this.props.email}</p>
          <br />

          <p>This site is built with React.js and is hosted on GitHub pages. <a href="https://open.spotify.com/user/1163697803/playlist/3RgPhbIIJSCaErT7qaYkTo?si=ERbHVL2FTLGmDpN7tewDsg">🎵</a></p>
          </footer>
    );
  }
};

export default Footer;
