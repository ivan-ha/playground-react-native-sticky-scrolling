import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
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

const _Item = ({ item }) => {
  return (
    <View key={item.id} style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
};

const Item = memo(_Item)

const renderItem = ({ item }) => {
  console.log('renderItem')
  return(
    <Item item={item}/>
  )
};

const [itemZero, ...restData] = data
const keyExtractor = item => item.id

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
      <Item item={itemZero}/>
      <FlatList
        data={restData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
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
