import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './index.styles';

const defaultProps = {
  progress: 0,
  size: 150,
  borderWidth: 1,
  borderColor: '#72b924',
  textColor: '#72b924',
  backgroundColor: 'white',
  fontFamily: 'sans-serif',
  showPercent: false,
  showNumber: true,
};

const propTypes = {
  progress: PropTypes.number,
  size: PropTypes.number,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontFamily: PropTypes.string,
  showPercent: PropTypes.bool,
};

class ProgressTracker extends Component {
  constructor(props) {
    super(props);
    this.interval = false;
    this.state = {
      currentProgress: Math.round(props.progress) || 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.animateCircle(0, this.props.progress);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    this.animateCircle(this.state.currentProgress, nextProps.progress);
  }

  animateCircle(from, to) {
    console.log('from', from);    
    console.log('to', to);    
    if (to > 100 || to < 0 || to === from) {
      return;
    }
    // calculate the angle based on radius and % value
    const deg = (to / 100) * 360;
    const diff = Math.abs(to - from) / 60;

    // if the old and new progress are less than 50%
    if (from <= 50 && to <= 50) {
      this.animateNumber(to, diff);
      this.pieRight.style.transform = `rotate(${deg}deg)`;
      this.pieRight.style.transitionDuration = `${diff}s`;
      this.pieRight.style.transitionDelay = '0s';
      return;
    }

    // if the old and new progress are bigger than 50%
    if (to > 50 && from > 50) {
      this.animateNumber(to, diff);
      this.pieLeft.style.transform = `rotate(${deg - 180}deg)`;
      this.pieLeft.style.transitionDuration = `${diff}s`;
      this.pieLeft.style.transitionDelay = '0s';
      return;
    }

    // If new progress is bigger than 50% and old progress is less than 50%
    const forward = !!(to > 50 && from <= 50);

    // Object to animate the first half
    const firstHalf = {
      rotate: forward ? 180 : ((360 * to) / 100),
      time: forward ? (50 - from) / 60 : (to - 50) / 60,
      delay: forward ? 0 : Math.abs((50 - from) / 60),
    };

    // Object to animate second half
    const secondHalf = {
      rotate: forward ? ((360 * to) / 100) - 180 : 0,
      time: forward ? (to - 50) / 60 : (50 - from) / 60,
      delay: forward ? (50 - from) / 60 : 0,
    };

    this.animateNumber(to, firstHalf.time + secondHalf.time);

    // Applying CSS animations
    this.pieRight.style.transform = `rotate(${firstHalf.rotate}deg)`;
    this.pieRight.style.transitionDuration = `${firstHalf.time}s`;
    this.pieRight.style.transitionDelay = `${firstHalf.delay}s`;

    this.pieLeft.style.transform = `rotate(${secondHalf.rotate}deg)`;
    this.pieLeft.style.transitionDuration = `${secondHalf.time}s`;
    this.pieLeft.style.transitionDelay = `${secondHalf.delay}s`;
  }

  animateNumber(to, time) {
    clearInterval(this.interval);
    if (this.state.currentProgress === to || (to > 100 && to < 0)) {
      return;
    }
    // Dynamic interval depending on the diff between the current and previous percent value
    const intervalTime = time * 1000 / (Math.abs(to - this.state.currentProgress));
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
    console.log('rendering');
    const custom = styles(this.props);
    return (
      <div className={css(custom.wrapper)}>
        {/* the animation circle is made with 2 half circles */}
        <div className={css(custom.outer)}>
          {/* first half when progress is under 50% */}
          <div className={css(custom.circle, custom.circleLt50)}>
            <div
              className={css(custom.pie, custom.pieRight)}
              ref={(pieRight) => { this.pieRight = pieRight; }}
            />
          </div>
          {/* second half when progress is over 50% */}
          <div className={css(custom.circle, custom.circleGt50)}>
            <div
              className={css(custom.pie, custom.pieLeft)}
              ref={(pieLeft) => { this.pieLeft = pieLeft; }}
            />
          </div>
        </div>
          <div className={css(custom.innerContainer)}>
          {this.props.showNumber &&
            <span className={css(custom.innerPercent)}>
              {`${this.state.currentProgress}${this.props.showPercent? '%': ''}`}
            </span>
          }
          </div>
        
      </div>
    );
  }
}

ProgressTracker.propTypes = propTypes;
ProgressTracker.defaultProps = defaultProps;
export default ProgressTracker;
