import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as ThreadProvider } from '../context/ThreadContext';
import ThreadForm from '../components/ThreadForm';

const EditThreadScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editThread } = useContext(ThreadProvider);

  const thread = state.find(thread => thread.id === id);

  return (
    <ThreadForm
      initialValues={{
        title: thread.title,
        participants: thread.participants,
        preview: thread.preview
      }}
      onSubmit={(title,participants,preview) => {
        editThread(
          id,
          title,
          participants,
          preview,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditThreadScreen;
