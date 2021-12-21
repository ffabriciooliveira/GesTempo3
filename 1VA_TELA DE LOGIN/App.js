import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View, Image, TextInput,  Button} from 'react-native'
import { createStackNavigator} from '@react-navigation/stack';
// TELA DE LOGIN
const Stack= createStackNavigator();
//export default class App extends Component {
export default function App ({navigation}) {
 // render () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <View style={styles.container}> 
         <Image 
          source={require('./assets/img/logo.png')}
          style={styles.logo}
         />

         <TextInput
          style={styles.input}
          placeholder="Digite seu email:"
         />

         <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
         />  
        <Button 
          title="Login"
          onPress= { () => navigation.navigate('Home')}
          />

        </View>    
        </Stack.Navigator> 
        </NavigationContainer> )
  }
//}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#2c3e50'
  },
  logo: {
    width: 160,
    height: 160, 
    borderRadius: 200
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor:'#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent:'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight:'bold',
    color:'#fff'
  }
});
