import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Project from "./Project";

class Work extends React.Component {
  static propTypes = {
    siteName: PropTypes.string
  }

  render() {

    return (
          <section>
                <h3>Work</h3>
          <div className="wrap__projects">
                {this.props.projects.map((details, i) => <Project key={details.id} details={details} />)}
          </div>
          </section>

    );
  }
};

export default Work;
