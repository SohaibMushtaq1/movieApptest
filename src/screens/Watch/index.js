/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import DummyDataWatch from '../../DummyData/watch';
import { HEIGHT, WIDTH } from '../../constants/size';
import { ICON } from '../../asset/Icons';

const Watch = ({ navigation }) => {

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
            ListHeaderComponent={() => {
                return (
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.headerComponent} onPress={() => { navigation.navigate('Search') }}>
                            <View style={styles.left}>
                                <Image source={ICON.SEARCH} style={{ height: HEIGHT * 0.06 }} />
                                <Text style={{ fontSize: 15 }}>TV shows, movies and more</Text>
                            </View>
                            <Image source={ICON.CLOSE} style={{ height: HEIGHT * 0.04 }} />
                        </TouchableOpacity>
                    </View>
                );
            }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity>
                        <ImageBackground source={item.image} style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}
        />
    );
};

export default Watch;

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
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
    },
    headerContainer: {
        width: WIDTH,
        height: HEIGHT * 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerComponent: {
        backgroundColor: 'lightgray',
        width: WIDTH * 0.8,
        height: HEIGHT * 0.06,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: WIDTH * 0.3
    }
});
