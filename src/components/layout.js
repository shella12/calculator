import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.keyPressedHandler = this.keyPressedHandler.bind(this);
  }

    keyPressedHandler = (event) => {
      const { keyPressedHandler } = this.props;
      keyPressedHandler(event.target.value);
    }

    render() {
      return (
        <div className="buttons">
          <button type="button" className="calcBtn" value="AC" onClick={this.keyPressedHandler}>AC</button>
          <button type="button" className="calcBtn" value="+/-" onClick={this.keyPressedHandler}>+/-</button>
          <button type="button" className="calcBtn" value="%" onClick={this.keyPressedHandler}>%</button>
          <button type="button" className="calcBtn orange" value="÷" onClick={this.keyPressedHandler}>÷</button>
          <button type="button" className="calcBtn" value="7" onClick={this.keyPressedHandler}>7</button>
          <button type="button" className="calcBtn" value="8" onClick={this.keyPressedHandler}>8</button>
          <button type="button" className="calcBtn" value="9" onClick={this.keyPressedHandler}>9</button>
          <button type="button" className="calcBtn orange" value="x" onClick={this.keyPressedHandler}>x</button>
          <button type="button" className="calcBtn" value="4" onClick={this.keyPressedHandler}>4</button>
          <button type="button" className="calcBtn" value="5" onClick={this.keyPressedHandler}>5</button>
          <button type="button" className="calcBtn" value="6" onClick={this.keyPressedHandler}>6</button>
          <button type="button" className="calcBtn orange" value="-" onClick={this.keyPressedHandler}>-</button>
          <button type="button" className="calcBtn" value="1" onClick={this.keyPressedHandler}>1</button>
          <button type="button" className="calcBtn" value="2" onClick={this.keyPressedHandler}>2</button>
          <button type="button" className="calcBtn" value="3" onClick={this.keyPressedHandler}>3</button>
          <button type="button" className="calcBtn orange" value="+" onClick={this.keyPressedHandler}>+</button>
          <button type="button" className="calcBtn zero" value="0" onClick={this.keyPressedHandler}>0</button>
          <button type="button" className="calcBtn" value="." onClick={this.keyPressedHandler}>.</button>
          <button type="button" className="calcBtn orange" value="=" onClick={this.keyPressedHandler}>=</button>
        </div>
      );
    }
}
Layout.propTypes = {
  keyPressedHandler: PropTypes.func.isRequired,
};

export default Layout;
