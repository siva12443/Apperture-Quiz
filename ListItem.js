import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

function ListItem(props) {
  function handleClick() {
    props.navigation.navigate(props.link);
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={handleClick}>
      <View style={styles.listItemContent}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
