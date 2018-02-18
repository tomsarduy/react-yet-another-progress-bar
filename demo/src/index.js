import React, { Component } from 'react';
import { render } from 'react-dom';
import { DebounceInput } from 'react-debounce-input';
import ProgressTracker from '../../src/index';
import styles from './index.styles';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 25,
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress(e) {
    this.setState({ progress: Number(e.target.value) });
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.title}>react-yet-another-progress-bar</h1>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#2196f3"
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
        <div style={styles.progressContainer}>
          <ProgressTracker progress={this.state.progress} />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#72b924"
            textColor="#72b924"
            showPercent={true}
          />
        </div>
        <div style={styles.progressContainer}>
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#3b1154"
            textColor="white"
            backgroundColor="#8027b7"
          />
        </div>
        <div style={styles.progressContainer}>
          {/* Pie chart style */}
          <ProgressTracker
            progress={this.state.progress}
            borderWidth="0"
            borderColor="#72b924"
            backgroundColor="transparent"
            showNumber={false}
            showPercent={false}
          />
        </div>
        <div style={styles.progressContainer}>
          {/* Custom text styles */}
          <ProgressTracker
            progress={this.state.progress}
            borderColor="#2196f3"
            textColor="white"
            textStyles={{
              fontSize: '1.5rem',
              backgroundColor: '#2196f3',
              padding: '.5rem',
              width: '2.5rem',
              height: '2.5rem',
              textAlign: 'center',
              lineHeight: '2.5rem',
              borderRadius: '50%',
            }}
            backgroundColor="transparent"
            borderWidth={1}
            showNumber={true}
          />
        </div>
        <div style={styles.progressContainer}>
          {/* Animate only the number */}
          <ProgressTracker
            progress={this.state.progress}
            borderColor="white"
            textColor="white"
            backgroundColor="#2196f3"
            borderWidth={1}
            showNumber={true}
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <span>Progress value</span>
          <DebounceInput
            type="text"
            value={this.state.progress}
            debounceTimeout={300}
            onChange={this.updateProgress}
            style={styles.customInput}
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
