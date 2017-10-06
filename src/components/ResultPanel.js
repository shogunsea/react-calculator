import React, { Component } from 'react';

class ResultPanel extends Component {
  render() {
    return (
      <div class="display">
      <div class="result_container">
        <div class="result">{this.props.result}</div>
      </div>
    </div>
    );
  }
}

export default ResultPanel;
