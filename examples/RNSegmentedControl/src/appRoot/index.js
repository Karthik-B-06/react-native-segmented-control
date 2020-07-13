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
      />
      <Text style={styles.textStyle}> Segmented Control with 3 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onChange={() => { }}
      />
      <Text style={styles.textStyle}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onChange={() => { }}
      />
      <Text style={styles.textStyle}>Customised Segmented Control</Text>
      <SegmentedControl
        tabs={['Shop', 'Discover', 'Brands']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        segmentedControlBackgroundColor='#E5E5EA'
        activeSegmentBackgroundColor='white'
        activeTextColor='black'
        textColor='black'
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