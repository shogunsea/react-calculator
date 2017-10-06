import React, { Component } from 'react';
import ResultPanel from './ResultPanel';
import OperandsPanel from './OperandsPanel';
import OperatorsPanel from './OperatorsPanel';
import OperatorsConfig from '../config/OperatorsConfig';
import OperandsConfig from '../config/OperandsConfig';

class Calculator extends Component {
  render() {
    // TODO: update result to be dynamic value. add state management.
    return (
        <div id="calculator">
          <ResultPanel result={0} />
          <div class="main-panel">
            <OperandsPanel config={OperandsConfig}/>
            <OperatorsPanel config={OperatorsConfig} />
          </div>
        </div>
    );
  }
}

export default Calculator;
