import React, {Component} from 'react';

class Operator extends Component {
  render() {
    const config = this.props.config;
    return <div tabindex={config.tabindex? config.tabindex: ""} class="operator button" data-value={config.dataValue} id={config.id}>{config.textValue}</div>;
  }
}

export default Operator;
