import React, {useState} from 'react';
import { StyleSheet,  View, Button,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  //CourseGoals, setCourseGoals are a series of arrays that will store previous user input values into a list.
  const [courseGoals, setCourseGoals] = useState([]);

  //A 
  const [isAddMode, setIsAddMode] = useState(false);
  //event handler that takes the previous course goal listed as the variable courseGoals and stores them into an array.
  //The Array uses the spread operator to store the previous goals, than adds the entered goals to the end of the list.
  const addGoalHandler = goalTitle =>
  {
    setCourseGoals(currentGoals =>[...currentGoals,
      {id: Math.random().toString(), value: goalTitle}]);
      setIsAddMode(false);
  };
  //A function which searches for the ID of an element and removes the element if the ID matches the Input ID from the user
  const removeGoalHandler = goalID =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalID);
    })
  };

  const  cancelGoalAdditionHandler = () =>
  {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Objective" onPress={() =>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <View>
        <FlatList keyExtractor={(item, index)=> item.id} data = {courseGoals} renderItem = {itemData => <GoalItem id = {itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
