import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Context } from '../context/ThreadContext';
import { Feather } from '@expo/vector-icons';

//
const IndexThreadScreen = ({ navigation }) => {
  
  //
  const { state, deleteThread, getThreads } = useContext(Context);

  useEffect(() => {
    getThreads();

    const listener = navigation.addListener('didFocus', () => {
      getThreads();
    });

    return () => {
      listener.remove();
    };
  }, []);

  //
  console.log("This is thread state: " + state);

  _alert = (item)=>{

    Alert.alert(item);
  
  }

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={thread => thread.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowThread', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.body}>
                {item.id},{item.preview},{item.title},{item.participants.administrator},{item.profile},{item.participants.contributors.map(x=>x)}
                { item.participants.contributors.map((item, key)=>(
                  <Text key={key} style={styles.littleStyle} onPress={ _alert.bind(this, item) }> { item }, </Text>)
                  )}
                </Text>
                <TouchableOpacity onPress={() => deleteThread(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexThreadScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateThread')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  body: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  littleStyle: {
    fontSize: 30,
    textDecorationLine: 'underline',
  }
});

export default IndexThreadScreen;
