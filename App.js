import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, StatusBar, StyleSheet, RefreshControl } from 'react-native';

const API_KEY = '9ff01fcb82966681a3e2537bf43a26d4';
const API_URL = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${API_KEY}`;

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.content}>{item.content}</Text>
    <Text style={styles.source}>Source: {item.source.name}</Text>
  </View>
);


const App = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const flatListRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };
  const renderItem = ({ item }) => <Item item={item} />;


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.publishedAt}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
  },
  source: {
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
  },
});


export default App;
