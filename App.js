import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList, ScrollView } from 'react-native';
import { useState, useRef } from 'react';

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
    <Item text={item.text} key={item.id} />
  );
}

const [itemZero, ...restData] = data
const renderData = restData.map(d => renderItem({ item: d }))

const App = () => {
  const [isSticky, setIsSticky] = useState(false)

  const onScroll = event => {
    setIsSticky(event.nativeEvent.contentOffset.y >= 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Press below button to toggle Item 0 stickiness. Color change indicates a re-render.</Text>
      {isSticky && <Item text={data[0].text} />}

      <ScrollView onScroll={onScroll} scrollEventThrottle={16}>
        <Item text={itemZero.text} />
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
