import React from "react";
import { View,Text, TextInput, AsyncStorage,Button, StyleSheet, TouchableOpacity } from "react-native";

//
const HomeScreen = ({ navigation }) => {

  const token = AsyncStorage.getItem('token');

  console.log("TOKEN: "+ token);

  return (
    
      <View>
        <Text style={styles.text}>Hi there...</Text>
        <Button
          onPress={()=> navigation.navigate('IndexPost')}
          title="Go to Posts"
        />
        <Button
            onPress={()=> navigation.navigate('IndexFollowship')}
            title="Go to Followships"
        />
        <Button
            onPress={()=> navigation.navigate('IndexProfile')}
            title="Go to Profiles"
        />
        <Button
            onPress={()=> navigation.navigate('Account')}
            title="Go to Account"
        />

      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
