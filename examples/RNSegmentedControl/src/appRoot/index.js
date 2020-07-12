import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from 'rn-segmented-control';

const AppRoot = () => {
  const handleTabPress = (index) => {
    // Function Callback with Tab index pressed
    console.log("Tab index", index)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello,World !</Text>
      <Text style={styles.textStyle}> Segmented Control with 2 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label']}
        onTabPress={handleTabPress}
      />
      <Text style={styles.textStyle}> Segmented Control with 3 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onTabPress={handleTabPress}
      />
      <Text style={styles.textStyle}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onTabPress={handleTabPress}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      <SegmentedControl
        tabs={['Shop', 'Discover', 'Brands']}
        onTabPress={handleTabPress}
        segmentedControlBackgroundColor='#E5E5EA'
        activeSegmentBackgroundColor='white'
        activeTextColor='black'
        textColor='black'
        currentIndex={1}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})


export default AppRoot;