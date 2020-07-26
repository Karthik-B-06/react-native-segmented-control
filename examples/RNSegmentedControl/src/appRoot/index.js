import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import SegmentedControl from '../components/segmentedControl';

const AppRoot = () => {
  const [tabIndex, setTabIndex] = React.useState(1);
  const [theme, setTheme] = React.useState('LIGHT');
  const toggleTheme = () => theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const handleTabsChange = index => {
    setTabIndex(index);
  };
  return (
    <View style={[styles.container, { backgroundColor: theme === 'LIGHT' ? 'white' : 'black' }]}>
      <Text style={[styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }]}>Hello,World !</Text>
      <Button title='Toggle Theme' onPress={toggleTheme}></Button>
      <Text style={[styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }]}>Segmented Control with 2 labels</Text>
      {/* Default Segmented Control */}
      <SegmentedControl
        tabs={['Label', 'Label']}
        onChange={() => { }}
        paddingVertical={6}
        containerStyle={{
          marginVertical: 20
        }}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        theme={theme}
      />
      <Text style={[styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }]}> Segmented Control with 3 labels</Text>
      {/* Segmented Control with a custom width */}
      <SegmentedControl
        tabs={['Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={10}
        containerStyle={{
          marginVertical: 20
        }}
        width={Dimensions.get('screen').width - 200}
        theme={theme}
      />
      <Text style={[styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }]}> Segmented Control with 4 labels</Text>
      <SegmentedControl
        tabs={['Label', 'Label', 'Label', 'Label']}
        onChange={() => { }}
        paddingVertical={14}
        width={Dimensions.get('screen').width - 90}
        containerStyle={{
          marginVertical: 20
        }}
        textStyle={{
          fontWeight: '300',
          fontSize: 24
        }}
        theme={theme}
      />
      <Text style={[styles.textStyle, { color: theme === 'LIGHT' ? 'black' : 'white' }]}>Customised Segmented Control</Text>
      {/* Segmented Control with a custom width, container style and font weight */}
      <SegmentedControl
        tabs={['Shop', 'Explore', 'Search']}
        segmentedControlBackgroundColor='#86c4fD'
        activeSegmentBackgroundColor='#0482f7'
        activeTextColor='white'
        textColor='black'
        paddingVertical={10}
        width={Dimensions.get('screen').width - 100}
        containerStyle={{
          marginVertical: 20
        }}
        textStyle={{
          fontWeight: '300'
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
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  }
})


export default AppRoot;