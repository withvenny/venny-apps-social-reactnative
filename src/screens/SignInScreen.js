import React from "react";
import { View,Text, Button, StyleSheet, TouchableOpacity } from "react-native";

//
const SignInScreen = ({ navigation }) => {

  //
  //console.log(navigation);

  return (
    
      <View>
        <Text style={styles.text}>Sign In</Text>
        <Button
            onPress={()=> navigation.navigate('SignIn')}
            title="Go to Sign In"
        />
        <Button
            onPress={()=> navigation.navigate('SignUp')}
            title="Go to Sign Up"
        />
        <Button
            onPress={()=> navigation.navigate('Home')}
            title="Go to Home"
        />
      </View>

  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SignInScreen;
