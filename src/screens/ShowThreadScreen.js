import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as ThreadProvider } from '../context/ThreadContext';
import { EvilIcons } from '@expo/vector-icons';

//
const ShowThreadScreen = ({ navigation }) => {

  //
  const { state } = useContext(ThreadProvider);
  
  //console.log(useContext(Context));

  //
  const thread = state.find(
    thread => thread.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {thread.id}</Text>
      <Text>Title: {thread.title}</Text>
      <Text>Preview: {thread.preview}</Text>
      <Text>Participants: {thread.participants.administrator}</Text>
      <Text>Participants: {thread.participants.contributors.toString()}</Text>
      <Text>Profile: {thread.profile}</Text>
    </View>
  );
};

ShowThreadScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditThread', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowThreadScreen;
