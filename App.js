import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
const App = () => {
  return (
    <Provider store ={store}>
      <View>
      <HomeScreen/>
    </View>
    </Provider>
   
  )
}

export default App