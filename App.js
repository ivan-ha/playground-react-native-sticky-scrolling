import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { useState } from 'react';

const data = [...Array(20).keys()].map(i => ({
  id: i,
  text: `Item ${i}`
}))

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const App = () => {
  const [isSticky, setIsSticky] = useState(false)

  const onButtonPress = () => {
    setIsSticky((isSticky) => !isSticky)
  }

  const renderItem = ({ item }) => (
    <Item text={item.text} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Press below button to toggle Item 0 stickiness</Text>
      <Button
        onPress={onButtonPress}
        title={isSticky ? 'Un-stick' : 'Stick'}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        stickyHeaderIndices={isSticky ? [0] : []}
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
