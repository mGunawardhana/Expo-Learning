import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput style={styles.txtField} placeholder="Your Course Goal" />
        <Button title="Add GOAL" />
      </View>
      <View>
       <Text style={styles.text}>List of Goals !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20
  },
  txtField: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    marginTop:10,
  },
});
