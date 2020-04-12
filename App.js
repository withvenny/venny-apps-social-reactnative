import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import IndexPostScreen from './src/screens/IndexPostScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import ShowPostScreen from './src/screens/ShowPostScreen';
import CreateScreen from './src/screens/CreateScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import EditScreen from './src/screens/EditScreen';
import EditPostScreen from './src/screens/EditPostScreen';

//
const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    IndexPost: IndexPostScreen,
    ShowPost: ShowPostScreen,
    CreatePost: CreatePostScreen,
    EditPost: EditPostScreen,
  },
  {
    initialRouteName: 'IndexPost',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
