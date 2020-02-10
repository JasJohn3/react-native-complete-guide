import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  //CourseGoals, setCourseGoals are a series of arrays that will store previous user input values into a list.
  const [courseGoals, setCourseGoals] = useState([]);

  //event handler that takes the previous course goal listed as the variable courseGoals and stores them into an array.
  //The Array uses the spread operator to store the previous goals, than adds the entered goals to the end of the list.
  const addGoalHandler = goalTitle =>
  {
    setCourseGoals(currentGoals =>[...currentGoals,
      {id: Math.random().toString(), value: goalTitle}]);
  }

    

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View>
        <FlatList keyExtractor={(item, index)=> item.id} data = {courseGoals} renderItem = {itemData => <GoalItem title={itemData.item.value} />} />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
