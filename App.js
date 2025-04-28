import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  return (
  //  <ScrollView>
     <View style={styles.container}>
      <Text style={styles.cont}>Hello!</Text>
      <Text style={styles.cont}>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  //  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    fontSize: 40
  }
});
