import { StyleSheet } from 'aphrodite';

export default ({
  size,
  borderWidth,
  borderColor,
  textColor,
  backgroundColor,
  textStyles,
}) =>
  StyleSheet.create({
    wrapper: {
      width: `${size}px`,
      height: `${size}px`,
      border: `${borderWidth}px solid ${borderColor}`,
      borderRadius: '50%',
      position: 'relative',
      boxSizing: 'content-box',
    },
    outer: {
      width: '100%',
      height: '100%',
    },
    innerContainer: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor,
      left: '6px',
      right: '6px',
      bottom: '6px',
      top: '6px',
    },
    innerPercent: {
      color: textColor,
      fontSize: '42px',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      ...textStyles,
    },
    circle: {
      position: 'absolute',
      top: '0',
      width: '100%',
      height: '100%',
    },
    circleLt50: {
      clip: `rect(0, ${size}px, ${size}px, ${size / 2}px)`,
    },
    pie: {
      width: '100%',
      height: '100%',
      transitionProperty: 'transform',
      transitionTimingFunction: 'linear',
      ':before': {
        content: "''",
        display: 'block',
        width: '50%',
        height: '100%',
        background: borderColor,
      },
    },
    pieRight: {
      ':before': {
        marginRight: `${size / 2}px`,
        borderTopLeftRadius: `${size / 2}px`,
        borderBottomLeftRadius: `${size / 2}px`,
      },
    },
    circleGt50: {
      clip: `rect(0, ${size / 2}px, ${size}px, 0)`,
    },
    pieLeft: {
      ':before': {
        marginLeft: `${size / 2}px`,
        borderTopRightRadius: `${size / 2}px`,
        borderBottomRightRadius: `${size / 2}px`,
      },
    },
  });
