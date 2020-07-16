<div align="center">
  
[![npm](https://badgen.net/npm/v/rn-segmented-control)](https://www.npmjs.com/package/rn-segmented-control) [![npm](https://badgen.net/npm/dt/rn-segmented-control)](https://www.npmjs.com/package/rn-segmented-control) [![npm](https://badgen.net/npm/license/rn-segmented-control)](https://www.npmjs.com/package/rn-segmented-control)
  
<h1>React Native Segmented Control</h1>

<img width="auto" height="350" src="./examples/RNSegmentedControl/assets/segmentcontrolios.gif">

</div>

---

## :anchor: Installation

```sh
yarn add rn-segmented-control
# or
npm i rn-segmented-control
```

## :arrows_clockwise: Dependencies

```sh
npm i prop-types
```


## :mag: Usage

```js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from 'rn-segmented-control';

const AppRoot = () => {
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = index => {
    setTabIndex(index);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello,World !</Text>
      <Text style={styles.textStyle}> Segmented Control with 2 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label']}
        onChange={() => { }}
        paddingVertical={6}
      />
      <Text style={styles.textStyle}> Segmented Control with 3 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={10}
      />
      <Text style={styles.textStyle}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={14}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      <SegmentedControl
        tabs={['Shop', 'Discover', 'Brands']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        segmentedControlBackgroundColor='#86c4fd'
        activeSegmentBackgroundColor='#0482f7'
        activeTextColor='white'
        textColor='black'
        paddingVertical={18}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})


export default AppRoot;

```

## :camera: Screenshot

<img width="auto" height="350" src='/examples/RNSegmentedControl/assets/screenshotios.png' />

## :wrench: Props

|   Name                           | Description                                    | Required    | Type        | Default     | 
| ---------------------------------| ---------------------------------------------- | ----------- | ----------- | ----------- |
| tabs                             | An array of labels for segments                | YES         | Array       | []          |
| onChange                         | A callback Function with pressed segment index | YES         | Function    | () => {}    |
| currentIndex                     | Index for the currently active segment         | YES         | Number      | 0           |
| activeSegmentBackgroundColor     | Background color of Active Label               | NO          | Color       | 'white'     |
| segmentedControlBackgroundColor  | Background color of the segment                | NO          | Color       | '#E5E5EA'   |
| textColor                        | Color of Label Text                            | NO          | Color       | 'black'     |
| activeTextColor                  | Color of Active Label Text                     | NO          | Color       | 'black'     |
| paddingVertical                  | A numeric value to manually adjust the height. | NO          | Number      | 12          |
| containerStyle                   | View style to shape the container of the tabs. | NO          | Number      | 12          |
| textStyle                        | Text styles for both active and inactive tabs. | NO          | Number      | 12          |


> Color accepts all [React Native Colors](https://reactnative.dev/docs/colors#color-representations).

## :tada: Example

Checkout the example [here](https://github.com/Karthik-B-06/rn-segmented-control/tree/master/examples/RNSegmentedControl).

## :notebook: Blog

Have a look at my blog [here](https://medium.com/timeless/react-native-segmented-control-92508dcba97c).

## :snowman: Built with ❤️ 

- [react-native](https://www.npmjs.com/package/react-native)

## :white_check_mark: Todos

- [ ] Customisable Text Styles
- [ ] Make it work in Landscape mode
- [ ] Custom Animation Spring Config
- [ ] Add React Native Reanimated library for animations

## :v: Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.


## :man: Author

[Karthik B](https://twitter.com/_iam_karthik) 


## :clipboard: License

MIT

