
import { FlatList,ScrollView, Text,StyleSheet,TouchableOpacity} from 'react-native';

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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.header}
      style={styles.scroll}
    >
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setCategory(item.id)}
          style={styles.categoryButton}
        >
          <Text
            style={category === item.id ? styles.activeCategoryText : styles.categoryText}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
);

const styles = StyleSheet.create({
  scroll:{
    flex:2,
    maxHeight:"10%"
  },
   header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    justifyContent:"center",
    alignItems:"flex-start",
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#555555',
  },
  activeCategoryText: {
    fontSize: 14,
    color: 'blue', // Change the color for active category
    fontWeight: 'bold',
  },
});

export default Header;