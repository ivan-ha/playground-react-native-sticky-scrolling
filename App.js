import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList, ScrollView } from 'react-native';
import { useState, memo } from 'react';

const randomColor = () => {
  const color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${color}`;
};

const data = [...Array(20).keys()].map(i => ({
  id: i,
  text: `Item ${i}`
}))

const Item = ({ text })  => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const renderItem = ({ item }) => {
  console.log('renderItem')
  return (
    <Item text={item.text} />
  );
}

const renderData = data.map(d => renderItem({ item: d }))

const App = () => {
  const [isSticky, setIsSticky] = useState(false)

  const onButtonPress = () => {
    setIsSticky((isSticky) => !isSticky)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Press below button to toggle Item 0 stickiness. Color change indicates a re-render.</Text>
      <Button
        onPress={onButtonPress}
        title={isSticky ? 'Un-stick' : 'Stick'}
      />
      <ScrollView>
        {renderData}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
  },
});

export default App
