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
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SegmentedControl from '../components/segmentedControl';

const AppRoot = () => {
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = index => {
    setTabIndex(index);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello,World !</Text>
      <Text style={styles.textStyle}>Segmented Control with 2 labels</Text>
      {/* Default Segmented Control */}
      <SegmentedControl
        tabs={['Label', 'Label']}
        onChange={() => { }}
        paddingVertical={6}
        containerStyle={{
          marginVertical: 20,
        }}
      />
      <Text style={styles.textStyle}> Segmented Control with 3 labels</Text>
      {/* Segmented Control with a custom width */}
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={10}
        containerStyle={{
          marginVertical: 20,
        }}
        width={Dimensions.get('screen').width - 230}
      />
      <Text style={styles.textStyle}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={14}
        width={Dimensions.get('screen').width - 120}
        containerStyle={{
          marginVertical: 20,
        }}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      {/* Segmented Control with a custom width, container style and font weight */}
      <SegmentedControl
        tabs={['Shop', 'Explore', 'Search']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        segmentedControlBackgroundColor='#86c4fd'
        activeSegmentBackgroundColor='#0482f7'
        activeTextColor='white'
        textColor='black'
        paddingVertical={10}
        width={Dimensions.get('screen').width - 100}
        containerStyle={{
          marginVertical: 20,
        }}
        textStyle={{
          fontWeight: '300',
        }}
      />
    </View >
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

<div align="center">
<h2>iOS</h2>
<img width="auto" height="350" src='/examples/RNSegmentedControl/assets/screenshotios.png' />

<h2>Android</h2>
<img width="auto" height="350" src='/examples/RNSegmentedControl/assets/screenshotandroid.png' />
</div>

## :wrench: Props

|   Name                           | Description                                    | Required    | Type                 | Default              | 
| ---------------------------------| ---------------------------------------------- | ----------- | -------------------- | -------------------- |
| tabs                             | An array of labels for segments                | YES         | Array                | []                   |
| onChange                         | A callback Function with pressed segment index | YES         | Function             | () => {}             |
| currentIndex                     | Index for the currently active segment         | YES         | Number               | 0                    |
| activeSegmentBackgroundColor     | Background color of Active Label               | NO          | Color                | 'white'              |
| segmentedControlBackgroundColor  | Background color of the segment                | NO          | Color                | '#E5E5EA'            |
| textColor                        | Color of Label Text                            | NO          | Color                | 'black'              |
| activeTextColor                  | Color of Active Label Text                     | NO          | Color                | 'black'              |
| paddingVertical                  | A numeric value to manually adjust the height. | NO          | Number               | 12                   |
| width                            | Sets the width of the segmented control        | NO          | Number               | Screen Specific Width|
| containerStyle                   | Style object for the Segmented Control         | NO          | ViewPropTypes.style  | {}                   |
| textStyle                        | Style object for the Labels                    | NO          | Text.style           | {}                   |




> Color accepts all [React Native Colors](https://reactnative.dev/docs/colors#color-representations).

> `containerStyle` accepts all View styles and overrides the defaults

> `textStyle` accepts all Text styles and overrides the defaults

## :tada: Example

Checkout the example [here](https://github.com/Karthik-B-06/rn-segmented-control/tree/master/examples/RNSegmentedControl).

## :notebook: Blog

Have a look at my blog [here](https://medium.com/timeless/react-native-segmented-control-92508dcba97c).

## :snowman: Built with ❤️ 

- [react-native](https://www.npmjs.com/package/react-native)

## :white_check_mark: Todos

- [ ] Custom Animation Spring Config
- [ ] Add React Native Reanimated library for animations

## :v: Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.


## :man: Author

[Karthik B](https://twitter.com/_iam_karthik) 


## :clipboard: License

MIT

