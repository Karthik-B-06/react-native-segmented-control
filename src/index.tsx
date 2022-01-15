import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export interface SegmentedControlProps {
  segments: string[];
  onChange: (index: number) => void;
  currentIndex: number;
}

const defaultShadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segments,
  currentIndex,
  onChange,
}: SegmentedControlProps) => {
  const width = widthPercentageToDP('100%') - 32;
  const translateValue = width / segments.length;
  const [tabTranslate] = React.useState(new Animated.Value(0));
  const memoizedTabPressCallback = React.useCallback(
    (index) => {
      onChange(index);
    },
    [onChange]
  );
  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 150,
      damping: 20,
      mass: 1,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    }).start();
  }, [currentIndex, tabTranslate, translateValue]);

  const activeTextStyle: TextStyle = {
    fontSize: 15,
    fontWeight: '500',
    color: '#2563eb',
    textAlign: 'center',
  };
  const inActiveTextStyle: TextStyle = {
    fontSize: 15,
    color: '#2563eb',
    textAlign: 'center',
  };

  return (
    <Animated.View style={styles.segmentedControlWrapper}>
      <Animated.View
        style={[
          styles.movingSegmentStyle,
          StyleSheet.absoluteFill,
          {
            width: width / segments.length,
            ...defaultShadowStyle,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      />
      {segments.map((segment, index) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => memoizedTabPressCallback(index)}
            key={segment}
            style={[styles.textWrapper]}
          >
            <Text
              style={[
                currentIndex === index ? activeTextStyle : inActiveTextStyle,
              ]}
            >
              {segment}
            </Text>
          </TouchableWithoutFeedback>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#27272A',
    paddingVertical: 10,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
  },
  movingSegmentStyle: {
    position: 'absolute',
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});

export default SegmentedControl;
