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
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
Panel.defaultProps = {
  total: '',
  next: '',
  operation: '',
};
export default Panel;
