import { View, Text, Image,StyleSheet} from 'react-native';


const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.source}>Source: {item.source.name}</Text>
    </View>
);
const styles = StyleSheet.create({
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

export default Item;