import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView} from "react-native";
import { Button } from "react-native-web";

export default function App() {
  console.log("App executed");
  let x;
  // x.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello word</Text>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={() => alert('Button Clicke')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
