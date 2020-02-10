import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props =>
{
    return (<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}><View style={styles.listitem}><Text  >{props.title}</Text></View></TouchableOpacity> ) 
}

const styles = StyleSheet.create({listitem:{padding:10, margin:5,backgroundColor:'azure',borderColor:'black',borderWidth: 1}});

export default GoalItem;

{/* <View style={styles.listitem}><Text  >{itemData.item.value}</Text></View> [original code changed to utilize props function] */}