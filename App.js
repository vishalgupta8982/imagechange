import { View, Text } from 'react-native'
import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Uidesign1 from './Uidesign1'
const nav = createStackNavigator({
   home:{
      screen:Uidesign1,navigationOptions:{headerShown:false}
   }
    
 
});
  
export default createAppContainer(nav)
 