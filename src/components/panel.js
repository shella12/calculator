import PropTypes from 'prop-types';

const Panel = (props) => {
  const { total, next, operation } = props;
  return (
    <div className="panel">
      {total}
      {operation}
      {next}
    </div>
  );
};

Panel.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Panel;
