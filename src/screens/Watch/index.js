/* eslint-disable prettier/prettier */
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import DummyDataWatch from '../../DummyData/watch';
import { HEIGHT, WIDTH } from '../../constants/size';
import TouchableComponent from '../../components/Touchable/movieWatch';

const Watch = () => {
    return (
        // <ScrollView contentContainerStyle={styles.container}
        // >
        //     {DummyDataWatch.map((item, index) => (
                // <ImageBackground source={item.image} style={styles.card}>
                //     <Text style={styles.title}>{item.title}</Text>
                // </ImageBackground>
        //     ))}
        // </ScrollView>
        <FlatList 
        data={DummyDataWatch}
        contentContainerStyle={styles.container}
        ListHeaderComponent={()=>{
            return(
                <View style={{width:WIDTH}}>
                    <View>
                        
                    </View>
                </View>
            );
        }}
        renderItem={({item,index})=>{
            return(
                <ImageBackground source={item.image} style={styles.card}>
                    <Text style={styles.title}>{item.title}</Text>
                </ImageBackground>
            )
        }}
        />
    );
};

export default Watch;

const styles = StyleSheet.create({
    container:{
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        height: HEIGHT
    },
    card: {
        height: HEIGHT * 0.15,
        width: WIDTH * 0.45,
        margin: 15,
        borderRadius: 50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30,
        marginBottom: 20,
        fontWeight: 'bold'
    }
});
