import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";

const data = [
  { id: '1', name: 'My Experience with ALS' },
  { id: '2', name: 'Vikram Sarabhai' },
  { id: '3', name: 'Future of Jobs' },
  { id: '4', name: 'Ambassador of Culture and Arts' },
];

const MyFlatList = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedItem(item);
      if (item.name === 'My Experience with ALS'){
      navigation.navigate('MyExperienceWithALS');
      } else if(item.name === 'Vikram Sarabhai'){
        navigation.navigate('VikramSarabhai')
      }
     else if(item.name === 'Future of Jobs'){
        navigation.navigate('FutureOfJobs')
      }else if(item.name === 'Ambassador of Culture and Arts'){
        navigation.navigate('AmbassadorsOfCultureAndArts')
      }
    }} >
      <View style={styles.itemContainer}>
        <Text style = {styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style = {{alignSelf: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 20}}>Select a Topic to Start</Text>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 300,
    height: 70,
    backgroundColor: '#c4def6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 20
  },
  itemText: {
    color: '#3f3f3f',
    fontSize: 18,
  },
});

export default MyFlatList;


