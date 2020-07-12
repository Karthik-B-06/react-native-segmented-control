import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';


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

const width = Dimensions.get('window').width - 32;

const SegmentedControl = (props) => {
  const translateValue = ((width - 4) / props?.tabs?.length);
  const [tabIndex, setTabIndex] = React.useState(props?.currentIndex);
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));
  const handlePress = (index) => {
    setTabIndex(index);
    props?.onTabPress(index);
  }
  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: tabIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true
    }).start()
  }, [tabIndex])
  return (
    <Animated.View style={[
      styles.segmentedControlWrapper,
      {
        backgroundColor: props?.segmentedControlBackgroundColor
      }
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
          borderRadius: 10,
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
        map(props?.tabs, (tab, index) => {
          const isCurrentIndex = tabIndex === index;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.textWrapper]}
              onPress={() => handlePress(index)}
              activeOpacity={0.7} >
              <Text style={[styles.textStyles, { color: props?.textColor }, !isCurrentIndex && { color: props?.activeTextColor }]}>{tab}</Text>
            </TouchableOpacity>
          )
        })
      }
    </Animated.View >
  )
}


const styles = StyleSheet.create({
  segmentedControlWrapper: {
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: width,
    marginVertical: 20
  },
  textWrapper: {
    flex: 1,
    elevation: 9
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  }
})

SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabPress: PropTypes.func.isRequired,
  currentIndex: PropTypes.number,
  activeSegmentBackgroundColor: PropTypes.string,
  segmentedControlBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string
}


SegmentedControl.defaultProps = {
  currentIndex: 0,
  segmentedControlBackgroundColor: '#86c4fd',
  activeSegmentBackgroundColor: '#0482f7',
  textColor: 'white',
  activeTextColor: 'black'
}

export default SegmentedControl;