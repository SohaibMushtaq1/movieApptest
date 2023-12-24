/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {ICON} from '../asset/Icons';
import Dashboard from './Dashboard';

const Main = () => {
    const data =[
        {
            id:1,
            title:"DashBorad",
            icon:ICON.DASGBOARD,
        },
        {
            id:2,
            title:"Watch",
            icon:ICON.WATCH,
        },
        {
            id:3,
            title:"Media Library",
            icon:ICON.MEDIA_LIBRARY,
        },
        {
            id:4,
            title:"More",
            icon:ICON.MORE,
        },
    ]
    const [selected,setSelected]= useState('DashBorad');
    const screens =()=>{
      switch(selected){
        case "DashBorad":
          return <Dashboard />;
        default:
          break;
      }
    }
  return (
    <View>
      {screens()}
      <FlatList 
      data={data}
      keyExtractor={(_,index)=>index.toString()}
      style={{backgroundColor:'#2E2739'}}
      horizontal
      renderItem={({item})=>{
        return(
          <View style={{flexDirection:'column'}}>
            <Image source={item.icon}/>
            <Text>{item.title}</Text>
          </View>
        );
      }}
      />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({});