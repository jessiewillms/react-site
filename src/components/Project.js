import React from 'react';
import slug from 'slugify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired
  }

  render() {
    const { projectTitle, projectUrl, projectTools, projectDetails, projectImage, id } = this.props.details;
    const image = projectImage != "" ? projectImage : 'null.jpg';

    return (
      <div className="project">
            <Link to={`/project/${id}/${slug(projectTitle)}`}>
                  <h4><span>{projectTitle}</span></h4>
                  <img src={image} alt={projectTitle} />
            </Link>
          <p>{projectDetails}</p>
    <p className="tools">{projectTools.map(single => <li>{single}</li>)}</p>
          <a href="{projectUrl}" target="_blank" className="link">View project</a>

      </div>
    );
  }
}

export default Project;
