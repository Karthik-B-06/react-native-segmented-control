import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SegmentedControl from './SegmentedControl';

export default function App() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabIndex1, setTabIndex1] = React.useState(0);
  const [tabIndex2, setTabIndex2] = React.useState(0);
  const [tabIndex3, setTabIndex3] = React.useState(0);
  const [tabIndex4, setTabIndex4] = React.useState(0);
  const [tabIndex5, setTabIndex5] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2']}
          onChange={(index) => setTabIndex(index)}
          currentIndex={tabIndex}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3']}
          onChange={(index) => setTabIndex1(index)}
          currentIndex={tabIndex1}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3', 'Label 4']}
          onChange={(index) => setTabIndex2(index)}
          currentIndex={tabIndex2}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3']}
          onChange={(index) => setTabIndex3(index)}
          currentIndex={tabIndex3}
          segmentedControlWrapper={{ backgroundColor: '#4a5568' }}
          activeTextStyle={styles.customBlackColor}
          inactiveTextStyle={styles.customWhiteColor}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3', 'Label 4']}
          onChange={(index) => setTabIndex4(index)}
          currentIndex={tabIndex4}
          segmentedControlWrapper={{ backgroundColor: '#a3e635' }}
          activeTextStyle={styles.customGreenColor}
          inactiveTextStyle={styles.customWhiteColor}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3']}
          onChange={(index) => setTabIndex5(index)}
          currentIndex={tabIndex5}
          segmentedControlWrapper={{ backgroundColor: '#7dd3fc' }}
          activeTextStyle={styles.customBlueTextColor}
          inactiveTextStyle={styles.customWhiteColor}
          tileStyle={styles.customBlueColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  customBlackColor: {
    color: 'black',
  },
  customWhiteColor: {
    color: 'white',
  },
  customGreenColor: {
    color: '#3f6212',
  },
  customBlueColor: {
    backgroundColor: '#e0f2fe',
  },
  customBlueTextColor: {
    color: '#0369a1',
  },
});
