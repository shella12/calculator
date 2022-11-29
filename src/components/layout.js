import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  const keyPressedHandler = (event) => {
    const { keyPressedHandler } = props;
    keyPressedHandler(event.target.value);
  };
  return (
    <div className="buttons">
      <button type="button" className="calcBtn" value="AC" onClick={keyPressedHandler}>AC</button>
      <button type="button" className="calcBtn" value="+/-" onClick={keyPressedHandler}>+/-</button>
      <button type="button" className="calcBtn" value="%" onClick={keyPressedHandler}>%</button>
      <button type="button" className="calcBtn orange" value="÷" onClick={keyPressedHandler}>÷</button>
      <button type="button" className="calcBtn" value="7" onClick={keyPressedHandler}>7</button>
      <button type="button" className="calcBtn" value="8" onClick={keyPressedHandler}>8</button>
      <button type="button" className="calcBtn" value="9" onClick={keyPressedHandler}>9</button>
      <button type="button" className="calcBtn orange" value="x" onClick={keyPressedHandler}>x</button>
      <button type="button" className="calcBtn" value="4" onClick={keyPressedHandler}>4</button>
      <button type="button" className="calcBtn" value="5" onClick={keyPressedHandler}>5</button>
      <button type="button" className="calcBtn" value="6" onClick={keyPressedHandler}>6</button>
      <button type="button" className="calcBtn orange" value="-" onClick={keyPressedHandler}>-</button>
      <button type="button" className="calcBtn" value="1" onClick={keyPressedHandler}>1</button>
      <button type="button" className="calcBtn" value="2" onClick={keyPressedHandler}>2</button>
      <button type="button" className="calcBtn" value="3" onClick={keyPressedHandler}>3</button>
      <button type="button" className="calcBtn orange" value="+" onClick={keyPressedHandler}>+</button>
      <button type="button" className="calcBtn zero" value="0" onClick={keyPressedHandler}>0</button>
      <button type="button" className="calcBtn" value="." onClick={keyPressedHandler}>.</button>
      <button type="button" className="calcBtn orange" value="=" onClick={keyPressedHandler}>=</button>
    </div>
  );
};

Layout.propTypes = {
  keyPressedHandler: PropTypes.func.isRequired,
};

export default Layout;
