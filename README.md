<div align="center">
<h1>React Native Segmented Control</h1>

![npm](https://badgen.net/badge/license/MIT/blue)
[![npm](https://badgen.net/npm/dt/rn-segmented-control)](https://www.npmjs.com/package/rn-segmented-control)
[![npm](https://badgen.net/npm/v/rn-segmented-control)](https://www.npmjs.com/package/rn-segmented-control)
[![](https://badgen.net/npm/types/tslib)](https://badgen.net/npm/types/tslib)

![SegmentedControl](https://user-images.githubusercontent.com/35562287/149650171-3cd9c972-6cf5-4aef-989f-199820d5b0e6.gif)
React Native Segmented Control for both iOS, Android and Web 😎

</div>

## :anchor: Installation

```sh
npm install rn-segmented-control
```

```sh
yarn add rn-segmented-control
```

## :arrows_counterclockwise: Dependencies

Make sure you have [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs) and [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) installed and configured.

## :wrench: Props

| Name                    | Description                                    | Required | Type      | Default   |
| ----------------------- | ---------------------------------------------- | -------- | --------- | --------  |
| segments                | An array of labels for segments                | YES      | Array     | []        |
| currentIndex            | Index for the currently active segment         | YES      | Number    | 0         |
| onChange                | A callback Function with pressed segment index | YES      | Function  | () => {}  |
| badgeValues             | An array of badge value for segments.          | NO       | Array     | []        |
| isRTL                   | Controls the toggle animation direction        | NO       | Boolean   | false     |
| containerMargin         | The value used to determine the width          | NO       | Number    | 16        |
| activeTextStyle         | active text styles                             | NO       | TextStyle | {}        |
| inactiveTextStyle       | inactive text styles.                          | NO       | TextStyle | {}        |
| segmentedControlWrapper | Style object for the Segmented Control.        | NO       | ViewStyle | {}        |
| pressableWrapper        | Style object for the Pressable Container       | NO       | ViewStyle | {}        |
| tileStyle               | Style object for the Absolute positioned tile  | NO       | ViewStyle | {}        |
| activeBadgeStyle        | Active Badge Style                             | NO       | ViewStyle | {}        |
| inactiveBadgeStyle      | Inactive Badge Style                           | NO       | ViewStyle | {}        |
| badgeTextStyle          | Badge text styles                              | NO       | TextStyle | {}        |
| renderTile              | Render a custom tile component                 | NO       | Function  | undefined |

> :warning: all View styles or Text Styles passed as props overrides some default styles provided by the package. Make sure you use it properly :)

> :information_source: To apply your own `shadowStyles` use the tileStyle prop

> :information_source: `renderTile` takes a function with `style`, `transform` and `width`. You can use these to style your custom tile to look the same as the default style (e.g. if you just wanted to change the animation)

## :mag: Usage

```tsx
import SegmentedControl from 'rn-segmented-control';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SegmentedControl from './SegmentedControl';

export default function App() {
  const [tabIndex, setTabIndex] = React.useState(0);

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
});
```

### Working Examples

Check the expo example app [here](https://github.com/Karthik-B-06/react-native-segmented-control/tree/main/example).

## :iphone: iOS and Android working Example.

![SegmentedControl](https://user-images.githubusercontent.com/35562287/149624111-2b3d1f7f-a685-404a-a167-f7020706880d.gif)

## :desktop_computer: Web

![DesktopExample](https://user-images.githubusercontent.com/35562287/149624298-c415d1cc-5f65-4e44-8efb-02a9e0f96dbb.gif)

## :v: Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## :man: Author

[Karthik B](https://twitter.com/_iam_karthik)

## :clipboard: License

MIT
