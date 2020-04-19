import React from "react";
import { View,Text, Button, StyleSheet, TouchableOpacity } from "react-native";

//
const SearchScreen = ({ navigation }) => {

  //
  //console.log(navigation);

  return (
    
      <View>
        <Text style={styles.text}>Search Screen</Text>
        <Button
          onPress={()=> navigation.navigate('Discover')}
          title="Go to Discover"
        />
        <Button
            onPress={()=> navigation.navigate('Search')}
            title="Go to Search"
        />
      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
