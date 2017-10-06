import React, {Component} from 'react';

class Operand extends Component {
  render() {
    const config = this.props.config;
    return <div class="operand button" data-value={config.dataValue} id={config.id}>{config.textValue}</div>;
  }
}

export default Operand;
