import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddImageItem = props =>
{
    return (<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}><View style={styles.listitem}><Text  >{props.title}</Text></View></TouchableOpacity> ) 
}

const styles = StyleSheet.create({listitem:{padding:10, margin:5,backgroundColor:'azure',borderColor:'black',borderWidth: 1}});

export default AddImageItem;