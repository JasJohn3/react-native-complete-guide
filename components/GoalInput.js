import React, {useState} from 'react';
import { View, StyleSheet , TextInput, Button, Modal} from 'react-native';
const GoalInput = props =>{
  //stores two state types of entered goal, which will be used to store the input values from the User.
  //setEnteredGoal which is used to store the User input into the program.
  const [enteredGoal, setEnteredGoal]=useState('');
  //this is a function that allows the entered text to be stored.
  const goalInputHandler = (enteredText) =>
  {
    setEnteredGoal(enteredText);
  }


    return (
      <Modal visible={props.visible} animationType= "slide">
        <View style={styles.inputContainer} >
        {/* onChangeText detects user input. The goalInputHandler is a function, but the function call is exluded allowing react to detect on event instead. */}
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"},
    input: { borderColor: 'black', borderWidth: 1, padding: '5%', width: '80%' }
});

export default GoalInput;