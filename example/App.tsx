import { StyleSheet, Text, View } from 'react-native';

import * as ExampleExpoModule from 'example-expo-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExampleExpoModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
