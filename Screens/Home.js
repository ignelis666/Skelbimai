import React from 'react';
import { StyleSheet,Alert, Text, View,AsyncStorage, TextInput, TouchableHighlight, ListView} from 'react-native';
import SkelbimuScreen  from './SkelbimuScreen'

export default class Home extends React.Component {
 constructor()
 {
 super()
 this.state = {
   marke: '',
   modelis: '',
   metai: '',
  kaina:''}
// this.persistData = this.persistData.bind(this); 
// this.clearData = this.clearData.bind(this);
} 
changeMarke(marke)
{
  this.setState({marke})
}
changeModelis(modelis)
{
  this.setState({modelis})
}
changeMetai(metai)
{
  this.setState({metai})
}
changeKaina(kaina)
{
  this.setState({kaina})
}

buttonPressed()
{
  const array = [];
  if(this.state.kaina && this.state.marke && this.state.modelis && this.state.metai)
  {
 
const data = {
   marke : this.state.marke,
   modelis : this.state.modelis,
   metai :  this.state.metai,
   kaina: this.state.kaina
}
array.push(data);
try {
  AsyncStorage.getItem('DB_form').then((value) => {
    if(value !== null){

const d = JSON.parse(value);
d.push(data)
AsyncStorage.setItem('DB_form', JSON.stringify(d)).then(()=>{
  this.props.navigator.push({
    title: 'Skelbimai',
    component: SkelbimuScreen 
  })
})
    } else {
      AsyncStorage.setItem('DB_form', JSON.stringify(array)).then(()=>{
        this.props.navigator.push({
          title: 'Skelbimai',
          component: SkelbimuScreen 
        })
        })
        }
        })
} catch (error) {
  console.log(error)
}
  } else {
    Alert.alert('Error 404')
  }
}

 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Skelbimai</Text>
    <Text style={styles.Banners}>Marke</Text>
    <TextInput 
    placeholder = "Marke"
    value={this.state.marke}
    onChangeText={(marke)=> this.changeMarke(marke)}
    style={styles.input}/> 

    <Text style={styles.Banners}>Modelis</Text>
    <TextInput
     placeholder = "Modelis"
    value = {this.state.modelis}
    onChangeText={(modelis)=> this.changeModelis(modelis)} 
    style={styles.input}/>

    <Text style={styles.Banners}>Metai </Text>
    <TextInput
     placeholder = "Metai"
    value = {this.state.metai}
    onChangeText={(metai)=>this.changeMetai(metai)}
    style={styles.input}/>

    <Text style={styles.Banners}>Kaina</Text>
    <TextInput
     placeholder = "Kaina"
    value={this.state.kaina}
    onChangeText={(kaina)=> this.changeKaina(kaina)}
    style={styles.input}/>

<TouchableHighlight
style={styles.button}
onPress={() => this.buttonPressed()}
underlayColor='blue'>
<Text style={styles.buttonText}>ISSAUGOTI</Text>
</TouchableHighlight>

    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#029113'
  },
  button: {
    height: 95,
    flexDirection: 'row',
    backgroundColor: '#029113',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 28,
    color: '#111',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    width: 200,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black'
  },
  Banners:
  {
    fontSize: 28,
    alignSelf: 'center'
  }
});
