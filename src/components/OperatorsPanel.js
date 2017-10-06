import React, { Component } from 'react';
import Operator from './Operator';

class OperatorsPanel extends Component {
  render() {
    return (
      <div class="operator_panel">
        {this.props.config.map((config) => {
          return <Operator config={config}/>;
        })}
      </div>
    );
  }
}

export default OperatorsPanel;
