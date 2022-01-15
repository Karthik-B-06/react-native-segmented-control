# react-native-segmented-control

React Native Segmented Control for both iOS and Android

## Installation

```sh
npm install react-native-segmented-control
```

## :wrench: Props

| Name                            | Description                                    | Required | Type                 | Default               |
| ------------------------------- | ---------------------------------------------- | -------- | -------------------- | --------------------- |
| segments                        | An array of labels for segments                | YES      | Array                | []                    |
| currentIndex                    | Index for the currently active segment         | YES      | Number               | 0                     |
| onChange                        | A callback Function with pressed segment index | YES      | Function             | () => {}              |
| badgeCount                      | An array of badge value for segments.          | NO       | Array                | []                    |
| isRTL                           | Controls the toggle animation direction        | NO       | Boolean              | false                 |
| containerMargin                 | The value used to determine the width          | NO       | Number               | 16                    |
| activeTextStyle                 | active text styles                             | NO       | TextStyle            | {}                    |
| inactiveTextStyle               | inactive text styles.                          | NO       | ViewStyle            | {}                    |
| segmentedControlWrapper         | Style object for the Segmented Control.        | NO       | ViewStyle.           | {}                    | 
| pressableWrapper                | Style object for the Pressable Container       | NO       | ViewStyle.           | {}                    |  
| tileStyle                       | Style object for the Absolute positioned tile  | NO       | ViewStyle            | {}                    |


> :warning: `segmentedControlWrapper` accepts all View styles and does override some default styles provided by the package. Make sure you use it properly :)

> :warning: `activeTextStyle` and `inactiveTextStyle` accepts all Text styles and overrides the defaults. Make sure you use it properly :)

> :warning: `tileStyle` accepts all View styles and does override some default styles provided by the package. Make sure you use it properly :)

> :information_source: To apply your own `shadowStyles` use the tileStyle prop 



## Usage

```tsx
import SegmentedControl from 'react-native-segmented-control';

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
  const [tabIndex6, setTabIndex6] = React.useState(0);

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
          badgeCount={[2]}
        />
      </View>
      <View style={styles.box}>
        <SegmentedControl
          containerMargin={16}
          segments={['Label 1', 'Label 2', 'Label 3']}
          onChange={(index) => setTabIndex6(index)}
          currentIndex={tabIndex6}
          badgeCount={[2, null, 1]}
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
