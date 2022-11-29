import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <div className="panel">0</div>
          <div className="buttons">
            <button type="button" className="calcBtn" value="AC">AC</button>
            <button type="button" className="calcBtn" value="+/-">+/-</button>
            <button type="button" className="calcBtn" value="%">%</button>
            <button type="button" className="calcBtn orange" value="÷">÷</button>
            <button type="button" className="calcBtn" value="7">7</button>
            <button type="button" className="calcBtn" value="8">8</button>
            <button type="button" className="calcBtn" value="9">9</button>
            <button type="button" className="calcBtn orange" value="x">x</button>
            <button type="button" className="calcBtn" value="4">4</button>
            <button type="button" className="calcBtn" value="5">5</button>
            <button type="button" className="calcBtn" value="6">6</button>
            <button type="button" className="calcBtn orange" value="-">-</button>
            <button type="button" className="calcBtn" value="1">1</button>
            <button type="button" className="calcBtn" value="2">2</button>
            <button type="button" className="calcBtn" value="3">3</button>
            <button type="button" className="calcBtn orange" value="+">+</button>
            <button type="button" className="calcBtn zero" value="0">0</button>
            <button type="button" className="calcBtn" value=".">.</button>
            <button type="button" className="calcBtn orange" value="=">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
