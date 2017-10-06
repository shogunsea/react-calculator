import React, { Component } from 'react';

class OperatorsPanel extends Component {
  render() {
    return (
      <div class="operator_panel">
        <div tabindex="0" class="operator button" data-value="divide" id="button_divide">÷</div>
        <div tabindex="0" class="operator button" data-value="multiply" id="button_multiply">×</div>
        <div tabindex="0" class="operator button" data-value="minus" id="button_minus">-</div>
        <div tabindex="0" class="operator button" data-value="plus" id="button_plus">+</div>
        <div class="operator button evaluate" data-value="evaluate" id="button_evaluate">=</div>
      </div>
    );
  }
}

export default OperatorsPanel;
