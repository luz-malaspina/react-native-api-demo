import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableHighlight 
        onPress={()=> alert("El puesto es tuyo, comenzas en febrero.")}
        underlayColor={'#red'} 
        style={{
          color: '#fff',
          backgroundColor: '#000', 
          height: 80, 
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          cursor: 'pointer'
        }}>
        <Text style={{color: 'red'}}>Pulsa aqui</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
