import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';

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

const Item = ({ text, backgroundColor }) => (
  <View style={[styles.item, { backgroundColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const App = () => {
  const [isSticky, setIsSticky] = useState(false)
  const color = randomColor()

  const onButtonPress = () => {
    setIsSticky((isSticky) => !isSticky)
  }

  const renderItem = backgroundColor => ({ item }) => (
    <Item text={item.text} backgroundColor={backgroundColor}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Press below button to toggle Item 0 stickiness. Color change indicates a re-render.</Text>
      <Button
        onPress={onButtonPress}
        title={isSticky ? 'Un-stick' : 'Stick'}
      />
      <ScrollView>
        {data.map(d => renderItem(color)({ item: d }))}
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
