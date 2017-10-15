import React, { Component } from 'react';
import { render } from 'react-dom';
import { DebounceInput } from 'react-debounce-input';
import ProgressTracker from '../../src/index';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 30,
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress(e) {
    this.setState({ progress: Number(e.target.value) });
  }

  render() {
    return (
      <div>
        <h1>react-circular-progress Demo</h1>
        <ProgressTracker progress={this.state.progress} />
        <h2>Update progress value</h2>
        <DebounceInput
          type="text"
          debounceTimeout={300}
          onChange={this.updateProgress}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
