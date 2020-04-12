import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{
        host: blogPost.host,
        body: blogPost.body,
        closed: blogPost.closed,
        deleted: blogPost.deleted,
        access: blogPost.access
      }}
      onSubmit={(host, body,closed,deleted,access) => {
        editBlogPost(
          id,
          host,
          body,
          closed,
          deleted,
          access,
          () => navigation.pop()
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
