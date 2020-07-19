import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, ViewPropTypes } from 'react-native';


const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
}


const SegmentedControl = (props) => {
  const { width } = props;
  const translateValue = ((width - 4) / props?.tabs?.length);
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback(
    (index) => {
      props?.onChange(index);
    },
    [props?.onChange]
  );

  useEffect(() => {
    // If phone is set to RTL, make sure the animation does the correct transition.
    const transitionMultiplier = props?.isRTL ? -1 : 1;

    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: props?.currentIndex * (transitionMultiplier * translateValue),
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true
    }).start()
  }, [props?.currentIndex])

  return (
    <Animated.View style={[
      props?.containerStyle,
      styles.segmentedControlWrapper,
      {
        width: width,
      },
      {
        backgroundColor: props?.segmentedControlBackgroundColor
      },
      {
        paddingVertical: props?.paddingVertical,
      },
    ]}>
      <Animated.View
        style={[{
          ...StyleSheet.absoluteFill,
          position: "absolute",
          width: (width - 4) / props?.tabs?.length,
          top: 0,
          marginVertical: 2,
          marginHorizontal: 2,
          backgroundColor: props?.activeSegmentBackgroundColor,
          borderRadius: 8,
          ...shadow,
        },
        {
          transform: [
            {
              translateX: tabTranslate
            }
          ]
        }]}
      >
      </Animated.View>
      {
        props?.tabs.map((tab, index) => {
          const isCurrentIndex = props?.currentIndex === index;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.textWrapper]}
              onPress={() => memoizedTabPressCallback(index)}
              activeOpacity={0.7} >
              <Text
                numberOfLines={1}
                style={[
                  styles.textStyles,
                  props?.textStyle,
                  { color: props?.textColor },
                  isCurrentIndex && { color: props?.activeTextColor },
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </Animated.View>
  )
}


const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  }
})


SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  width: PropTypes.number,
  containerStyle: ViewPropTypes.style,
  textStyle: PropTypes.object,
  isRTL: PropTypes.bool
}


SegmentedControl.defaultProps = {
  tabs: [],
  onChange: () => { },
  currentIndex: 0,
  segmentedControlBackgroundColor: '#E5E5EA',
  activeSegmentBackgroundColor: 'white',
  textColor: 'black',
  activeTextColor: 'black',
  paddingVertical: 12,
  width: Dimensions.get('screen').width - 32,
  containerStyle: {},
  textStyle: {},
  isRTL: false,
}

export default SegmentedControl;
