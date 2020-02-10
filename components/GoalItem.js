import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const GoalItem = props =>
{
    return (<View style={styles.listitem}><Text  >{props.title}</Text></View> ) 
}

const styles = StyleSheet.create({listitem:{padding:10, margin:5,backgroundColor:'azure',borderColor:'black',borderWidth: 1}});

export default GoalItem;

{/* <View style={styles.listitem}><Text  >{itemData.item.value}</Text></View> [original code changed to utilize props function] */}