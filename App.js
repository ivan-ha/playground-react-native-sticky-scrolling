import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';

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
  const renderItem = ({ item }) => (
    <Item text={item.text} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
