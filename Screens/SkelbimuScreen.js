import React from 'react';
import { 
  StyleSheet, 
  Text,
   View,
   ScrollView,
   AsyncStorage,
  Button
  } from 'react-native';

export default class SkelbimuScreen extends React.Component {
 constructor()
 {
   super() 
   this.state = {
     list: ''
   }
   try {
     AsyncStorage.getItem('DB_form').then((value) => {
       this.setState({
         list: JSON.parse(value)
       })
     })
   } catch (error) {
     console.log(error)
   }

 }
 parseData()
 {
if(this.state.list){
return this.state.list.map((data , i) => {
  return (
    <View 
    style={styles.dataList}
    key={i}>
    <Text>Marke :{data.marke}</Text>
    <Text>Modelis :{data.modelis}</Text>
    <Text>Metai :{data.metai}</Text>
    <Text>Kaina :{data.kaina}+ &#8364</Text>

    </View>
  )
})
}
 } 
  render()
  {
   
    return(
      <View style={styles.container}>

        
        <ScrollView>{this.parseData()}
        </ScrollView>
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  dataList : {
    width : 300,
marginTop: 5,
marginBottom: 5,
borderWidth: 2
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
});
