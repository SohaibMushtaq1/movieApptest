/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { HEIGHT, WIDTH } from '../../constants/size';
import { ICON } from '../../asset/Icons';

const Search = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerComponent}>
                <View style={styles.left}>
                    <Image source={ICON.SEARCH} style={{ height: HEIGHT * 0.06 }} />
                    <TextInput 
                    style={{width:WIDTH *0.7}} 
                    placeholder='TV shows, movies and more'
                    />
                </View>
                <Image source={ICON.CLOSE} style={{ height: HEIGHT * 0.04,marginLeft:WIDTH * 0.02}} />
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    headerContainer: {
        width: WIDTH,
        height: HEIGHT * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    headerComponent: {
        backgroundColor: 'lightgray',
        width: WIDTH * 0.9,
        height: HEIGHT * 0.06,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft:20
    }
});
