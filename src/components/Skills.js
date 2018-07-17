import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Skills extends React.Component {
  static propTypes = {
    siteName: PropTypes.string
  }

  render() {
    return (
          <section>
                <h3>Skills</h3>
                <p>{this.props.tech}</p>
          </section>

    );
  }
};

export default Skills;
