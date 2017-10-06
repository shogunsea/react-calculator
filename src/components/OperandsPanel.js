import React, { Component } from 'react';

class OperandsPanel extends Component {
  render() {
    return (
      <div class="operand_panel">
        <div class="operand_row row_one">
          <div class="modify operand button" data-value="clear" id="button_clear">AC</div>
          <div class="modify operand button" data-value="sign" id="button_sign">+/-</div>
          <div class="modify operand button" data-value="percent" id="button_percent">%</div>
        </div>
        <div class="operand_row">
          <div class="operand button" data-value="7" id="button_seven">7</div>
          <div class="operand button" data-value="8" id="button_eight">8</div>
          <div class="operand button" data-value="9" id="button_nine">9</div>
        </div>
        <div class="operand_row">
          <div class="operand button" data-value="4" id="button_four">4</div>
          <div class="operand button" data-value="5" id="button_five">5</div>
          <div class="operand button" data-value="6" id="button_six">6</div>
        </div>
        <div class="operand_row">
          <div class="operand button" data-value="1" id="button_one">1</div>
          <div class="operand button" data-value="2" id="button_two">2</div>
          <div class="operand button" data-value="3" id="button_three">3</div>
        </div>
        <div class="operand_row">
          <div class="operand button" data-value="0" id="button_zero">0</div>
          <div class="operand button" data-value="dot" id="button_dot">.</div>
        </div>
      </div>
    );
  }
}

export default OperandsPanel;


