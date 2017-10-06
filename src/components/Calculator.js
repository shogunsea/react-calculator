import React, { Component } from 'react';
import ResultPanel from './ResultPanel';
import OperandsPanel from './OperandsPanel';
import OperatorsPanel from './OperatorsPanel';

class Calculator extends Component {
  render() {
    return (
        <div id="calculator">
          <ResultPanel result={0} />
          <div class="main-panel">
            <OperandsPanel />
            <OperatorsPanel />
          </div>
        </div>
    );
  }
}

export default Calculator;
