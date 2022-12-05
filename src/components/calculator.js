import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButton from './calcButton';
import Panel from './panel';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onKeyPressedHandler = (value) => {
    const obj = { total, next, operation };
    const result = calculate(obj, value);
    if (value === 'AC') {
      result.total = '0';
    }
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };
  return (
    <div className="calc-layout">
      <h2 className="heading">Let&apos;s do some Maths!</h2>
      <div className="calculator">
        <Panel total={total} next={next} operation={operation} />
        <CalcButton keyPressedHandler={onKeyPressedHandler} />
      </div>
    </div>
  );
};

export default Calculator;
