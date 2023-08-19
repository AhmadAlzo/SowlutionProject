import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, StatusBar, StyleSheet, RefreshControl  } from 'react-native';
import Item from './component/Item';
import Header from './component/Header';

const API_KEY = '9ff01fcb82966681a3e2537bf43a26d4';
const BASE_API_URL = `https://gnews.io/api/v4/top-headlines?`;
const DEFAULT_CATEGORY = 'general';

const App = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`);
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
      <Header setCategory={setCategory} category={category}/>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.flat}
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
  flat:{
    flex:5,
  }
});


export default App;
