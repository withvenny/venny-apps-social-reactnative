import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>ID: {blogPost.id}</Text>
      <Text>Body: {blogPost.body}</Text>
      <Text>Closed: {blogPost.closed}</Text>
      <Text>Deleted: {blogPost.deleted}</Text>
      <Text>Access: {blogPost.access}</Text>
      <Text>Host: {blogPost.host}</Text>
      <Text>Profile: {blogPost.profile}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
