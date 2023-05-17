import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    setEnteredGoalText("");
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        enteredGoalText={enteredGoalText}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            text={itemData.item.text}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
