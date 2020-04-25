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

  var subject1=['item1','item2'];

  var subject=['item3','item4','item5'];

  subject1.push(...subject);

  console.log(subject1);

  var alerts = { 
    administrators: ['prf_1','prf_2'],
    blocked: ['prf_5','prf_6'],
}

alerts = Object.assign({contributors: ['prf_1','prf_2','prf_3','prf_4']}, alerts)

console.log(alerts);

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
                ID: {item.id},
                Preview: {item.preview},
                Title: {item.title},
                Adminstrators::toString: {item.participants.administrators.toString()},
                Adminstrators: {JSON.stringify(item.participants.administrators)},
                Contributors::toString: {item.participants.contributors.toString()},
                Contributors: {JSON.stringify(item.participants.contributors)},
                Profile: {item.profile}
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
