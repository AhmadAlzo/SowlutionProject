
import { FlatList, Text,StyleSheet,TouchableOpacity} from 'react-native';

const categories = [
    { id: 'general', label: 'General' },
    { id: 'business', label: 'Business' },
    { id: 'world', label: 'world' },
    { id: 'nation', label: 'nation' },
    { id: 'technology', label: 'technology' },
    { id: 'entertainment', label: 'entertainment' },
    { id: 'sports', label: 'sports' },
    { id: 'science ', label: 'science ' },
    { id: 'health ', label: 'health ' },
];

const Header = ({setCategory,category}) => (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.header}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setCategory(item.id)} style={styles.categoryButton}>
          <Text style={category === item.id ? styles.activeCategoryText : styles.categoryText}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#F0F0F0',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
      },
      categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 2,
      },
      categoryText: {
        fontSize: 16,
        color: 'gray',
      },
      activeCategoryText: {
        fontSize: 16,
        color: 'blue', // Change the color for active category
        fontWeight: 'bold',
      },
});

export default Header;