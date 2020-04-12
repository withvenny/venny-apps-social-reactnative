import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

  const [host, setHost] = useState(initialValues.host);
  const [body, setBody] = useState(initialValues.body);
  const [closed, setClosed] = useState(initialValues.closed);
  const [deleted, setDeleted] = useState(initialValues.deleted);
  const [access, setAccess] = useState(initialValues.access);

  return (
    <View>

      <Text style={styles.label}>Enter Body:</Text>
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={text => setBody(text)}
      />

      <Text style={styles.label}>Enter Host:</Text>
      <TextInput
        style={styles.input}
        value={host}
        onChangeText={text => setHost(text)}
      />

      <Text style={styles.label}>Enter Closed:</Text>
      <TextInput
        style={styles.input}
        value={closed}
        onChangeText={text => setClosed(text)}
      />

      <Text style={styles.label}>Enter Deleted:</Text>
      <TextInput
        style={styles.input}
        value={deleted}
        onChangeText={text => setDeleted(text)}
      />

      <Text style={styles.label}>Enter Access:</Text>
      <TextInput
        style={styles.input}
        value={access}
        onChangeText={text => setAccess(text)}
      />

      <Button title="Save Blog Post" onPress={() => onSubmit(host, body,closed,deleted,access)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    host: '',
    body: '',
    closed: '',
    deleted: '',
    access: ''
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
