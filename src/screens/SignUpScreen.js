import React from "react";
import { View,Text, Button, StyleSheet, TouchableOpacity } from "react-native";

//
const SignUpScreen = ({ navigation }) => {

  //
  //console.log(navigation);

  return (
    
      <View>
        <Text style={styles.text}>Sign Up</Text>
        <Button
            onPress={()=> navigation.navigate('SignIn')}
            title="Go to Sign In"
        />
        <Button
            onPress={()=> navigation.navigate('SignUp')}
            title="Go to Sign Up"
        />
      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SignUpScreen;
