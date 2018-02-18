import React, { Component } from 'react';
import { render } from 'react-dom';
import { DebounceInput } from 'react-debounce-input';
import ProgressTracker from '../../src/index';
import styles from './index.styles';

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
      <div style={styles.wrapper}>
        <h1>react-circular-progress Demo</h1>
        <div style={styles.progressContainer}>
          <ProgressTracker progress={this.state.progress} />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#72b924"
            textColor="#72b924"
          />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#3b1154"
            textColor="white"
            backgroundColor="#8027b7"
            showPercent={true}
          />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#3b1154"
            showNumber={false}
          />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#3b1154"
            textColor="#3b1154"
            showNumber={true}
            borderWidth={0}
          />
        </div>
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
