import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalItem = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goal}>{goal}</Text>
    </View>
  );
};

const GoalItem = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goal}>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 0,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});

export default GoalItem;
