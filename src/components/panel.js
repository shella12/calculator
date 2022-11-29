import React from 'react';
import PropTypes from 'prop-types';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="panel">
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

Panel.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
export default Panel;
