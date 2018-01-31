import React from 'react';
import {TabNavigator} from 'react-navigation';
import Home from './Screens/Home';
import SkelbimuScreen from './Screens/SkelbimuScreen';

var Screenai = TabNavigator({
  Pridėti: {screen: Home},
  Skelbimai : {screen: SkelbimuScreen},
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions:{
activeTintColor: 'blue',
  } 


});
export default Screenai;
 
