import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './index.styles';

const defaultProps = {
  progress: 0,
  size: 150,
  borderWidth: 1,
  borderColor: 'green',
  textColor: 'green',
  backgroundColor: 'gray',
  fontFamily: 'sans-serif',
};

const propTypes = {
  progress: PropTypes.number,
  size: PropTypes.number,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontFamily: PropTypes.string,
};

class ProgressTracker extends Component {
  constructor(props) {
    super(props);
    this.interval = false;
    this.state = {
      currentProgress: Math.round(props.progress) || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.animateNumber(nextProps.progress);
  }

  animateNumber(to) {
    clearInterval(this.interval);
    if (this.state.currentProgress === to || (to > 100 && to < 0)) {
      return;
    }
    // Dynamic interval depending on the diff between the current and previous percent value
    const intervalTime = Math.abs((Math.abs(to - this.state.currentProgress) - 100) / 2);
    this.interval = setInterval(() => {
      if (this.state.currentProgress === Math.round(to)) {
        clearInterval(this.interval);
      } else {
        this.setState({
          currentProgress: this.state.currentProgress += (this.state.currentProgress < to) ? 1 : -1,
        });
      }
    }, intervalTime);
  }

  render() {
    const custom = styles(this.props);
    return (
      <div className={css(custom.wrapper)}>
        {/* the animation circle is made with 2 half circles */}
        <div className={css(custom.outer)}>
          {/* first half when progress is under 50% */}
          <div className={css(custom.circle, custom.circleLt50)}>
            <div
              className={css(custom.pieRight)}
              ref={(pieRight) => { this.pieRight = pieRight; }}
            />
          </div>
          {/* second half when progress is over 50% */}
          <div className={css(custom.circle, custom.circleGt50)}>
            <div
              className={css(custom.pieLeft)}
              ref={(pieLeft) => { this.pieLeft = pieLeft; }}
            />
          </div>
        </div>
        <div className={css(custom.innerContainer)}>
          <span className={css(custom.innerPercent)}>
            {`${this.state.currentProgress}%`}
          </span>
        </div>
      </div>
    );
  }
}

ProgressTracker.propTypes = propTypes;
ProgressTracker.defaultProps = defaultProps;
export default ProgressTracker;
