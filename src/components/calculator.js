import React from 'react';
import calculate from '../logic/calculate';
import Layout from './layout';
import Panel from './panel';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.onKeyPressedHandler = this.onKeyPressedHandler.bind(this);
  }

onKeyPressedHandler = (value) => {
  const { total, next, operation } = this.state;
  const obj = { total, next, operation };
  const result = calculate(obj, value);
  if (value === 'AC') {
    result.total = '0';
  }
  this.setState({
    total: result.total,
    next: result.next,
    operation: result.operation,
  });
}

render() {
  const { total, next, operation } = this.state;
  return (
    <div className="calculator">
      <Panel total={total} next={next} operation={operation} />
      <Layout keyPressedHandler={this.onKeyPressedHandler} />
    </div>
  );
}
}

export default Calculator;
