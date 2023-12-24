/* eslint-disable prettier/prettier */
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ICON } from '../asset/Icons';
import Dashboard from './Dashboard';
import Watch from './Watch';
import More from './More';
import MediaLibrary from './MediaLibrary';
import { HEIGHT, WIDTH } from '../constants/size';

const Main = () => {
  const data = [
    {
      id: 1,
      title: "DashBorad",
      icon: ICON.DASGBOARD,
    },
    {
      id: 2,
      title: "Watch",
      icon: ICON.WATCH,
    },
    {
      id: 3,
      title: "Media Library",
      icon: ICON.MEDIA_LIBRARY,
    },
    {
      id: 4,
      title: "More",
      icon: ICON.MORE,
    },
  ]
  const [selected, setSelected] = useState('Watch');
  const screens = () => {
    switch (selected) {
      case "DashBorad":
        return <Dashboard />;
      case "Watch":
        return <Watch />;
      case "Media Library":
        return <MediaLibrary />;
      case "More":
        return <More />;
      default:
        return;
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.screenDisplay}>
        {screens()}
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        style={styles.BOTTOMBAR}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.bottombarContent} onPress={(()=>{setSelected(item.title)})}>
              <Image source={item.icon} />
              <Text style={styles.bottombarTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  screenDisplay: {
    height: HEIGHT * 0.9
  },
  BOTTOMBAR: {
    backgroundColor: '#2E2739',
    borderRadius: 10
  },
  bottombarContent: {
    flexDirection: 'column',
    width: WIDTH * 0.25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottombarTitle: {
    color: 'white',
    marginTop: 5
  }

});