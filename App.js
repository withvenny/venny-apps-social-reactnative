import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//
import { FontAwesome } from '@expo/vector-icons';

// ONBOARDING
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

// LEGACY
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

// HOME
import HomeScreen from './src/screens/HomeScreen';

// POST
import IndexPostScreen from './src/screens/IndexPostScreen';
import ShowPostScreen from './src/screens/ShowPostScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import EditPostScreen from './src/screens/EditPostScreen';

// FOLLOWSHIP
import IndexFollowshipScreen from './src/screens/IndexFollowshipScreen';
import ShowFollowshipScreen from './src/screens/ShowFollowshipScreen';
import CreateFollowshipScreen from './src/screens/CreateFollowshipScreen';
import EditFollowshipScreen from './src/screens/EditFollowshipScreen';

// THREAD
import IndexThreadScreen from './src/screens/IndexThreadScreen';
import ShowThreadScreen from './src/screens/ShowThreadScreen';
import CreateThreadScreen from './src/screens/CreateThreadScreen';
import EditThreadScreen from './src/screens/EditThreadScreen';

// PROFILE
import IndexProfileScreen from './src/screens/IndexProfileScreen';
import ShowProfileScreen from './src/screens/ShowProfileScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

// SEARCH
import DiscoverScreen from './src/screens/DiscoverScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

//
import { Provider as PostProvider } from './src/context/PostContext';
import { Provider as FollowshipProvider } from './src/context/FollowshipContext';
import { Provider as ProfileProvider } from './src/context/ProfileContext';
import { Provider as ThreadProvider } from './src/context/ThreadContext';

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

  IndexFollowship: IndexFollowshipScreen,
  ShowFollowship: ShowFollowshipScreen,
  CreateFollowship: CreateFollowshipScreen,
  EditFollowship: EditFollowshipScreen,

  IndexThread: IndexThreadScreen,
  ShowThread: ShowThreadScreen,
  CreateThread: CreateThreadScreen,
  EditThread: EditThreadScreen,

  IndexProfile: IndexProfileScreen,
  ShowProfile: ShowProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditProfile: EditProfileScreen,

  Home: HomeScreen,

},{

  initialRouteName: 'Home',
  defaultNavigationOptions: {
  title: 'The NTRL Co.'

  }
});

const onboardingStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

const homeStack = createStackNavigator({
  Home: HomeScreen
});

const discoverStack = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Discover: DiscoverScreen,
});

const projectStack = createStackNavigator({
  IndexPost: IndexPostScreen,
  ShowPost: ShowPostScreen,
  CreatePost: CreatePostScreen,
  EditPost: EditPostScreen,
});

const inboxStack = createStackNavigator({
  IndexThread: IndexThreadScreen,
  ShowThread: ShowThreadScreen,
  CreateThread: CreateThreadScreen,
  EditThread: EditThreadScreen,
});

//
const profileStack = createStackNavigator({

  IndexPost: IndexPostScreen,
  ShowPost: ShowPostScreen,
  CreatePost: CreatePostScreen,
  EditPost: EditPostScreen,

  IndexFollowship: IndexFollowshipScreen,
  ShowFollowship: ShowFollowshipScreen,
  CreateFollowship: CreateFollowshipScreen,
  EditFollowship: EditFollowshipScreen,

  IndexProfile: IndexProfileScreen,
  ShowProfile: ShowProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditProfile: EditProfileScreen,

  Home: HomeScreen,

});

//
const switchNavigator = createSwitchNavigator({
  onboardingFlow: createStackNavigator({
    onboardingStack,
  }),
  experienceFlow: createBottomTabNavigator({
    homeStack,
    discoverStack,
    projectStack,
    inboxStack,
    profileStack
  }),
});

homeStack.navigationOptions = { title: 'Home', tabBarIcon: <FontAwesome name="home" size={20} /> };
discoverStack.navigationOptions = { title: 'Discover', tabBarIcon: <FontAwesome name="search" size={20} /> };
projectStack.navigationOptions = { title: 'Project', tabBarIcon: <FontAwesome name="plus" size={20} /> };
inboxStack.navigationOptions = { title: 'Inbox', tabBarIcon: <FontAwesome name="comments" size={20} /> };
profileStack.navigationOptions = { title: 'Me', tabBarIcon: <FontAwesome name="users" size={20} /> };

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <FollowshipProvider>
      <PostProvider>
        <ProfileProvider>
          <ThreadProvider>
            <App />
          </ThreadProvider>
        </ProfileProvider>
      </PostProvider>
    </FollowshipProvider>
  );
};
