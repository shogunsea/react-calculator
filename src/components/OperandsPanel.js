import React, { Component } from 'react';
import Operand from './Operand';

class OperandsPanel extends Component {
  generateRow(rowConfig) {
    return (
      <div class="operand_row">
        {rowConfig.map((config) => {
          return <Operand  config={config}/>;
        })}
      </div>
    );
  }

  render() {
    const config = this.props.config;
    return (
      <div class="operand_panel">
        {config.map((config) => {
          return this.generateRow(config);
        })}
      </div>
    );
  }
}

export default OperandsPanel;
