import React from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView} from "react-native";
import firestore from '@react-native-firebase/firestore';
export default class Firebase extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            age:""
        }

        this.FieldEntry=this.FieldEntry.bind(this)
    }
    componentDidMount(){ 
    }
    FieldEntry=async()=>{
        const {name, age} = this.state;
        console.log(name,age);

        firestore()
        .collection('Users')
        .add({
          name: name,
          age: age,
        })
        .then(() => {
         // console.log('User added!');
        });
        const subscriber = firestore()
        .collection('Users')
        .doc('xOoLfm9kofXuPcn4I12U')
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
    }
    render(){
    return (
        
        <View style={{ backgroundColor: 'white', flex:1 }}>
    <ScrollView>
     <View style={{width:400,height:150,backgroundColor:'gray'}}>
      <Text style={{color:'black',fontSize:50,marginTop:15,marginLeft:20}}> Contact Us
      </Text>
      <Text style={{color:'black',fontSize:20,marginTop:10 ,marginLeft:15}}> Please fill the from in a  decent manner</Text>

     </View>
         
         <Text style={{color:'black',fontSize:30,margin:30,marginTop:30}}>FULL NAME</Text>

         <TextInput value={this.state.name} onChangeText={(data) => this.setState({name: data})} style={{width:350,height:50,backgroundColor:'white',marginLeft:35,borderWidth:1,fontSize:20}}></TextInput> 
         
         <Text style={{color:'black',fontSize:30,margin:30,marginTop:30}}>AGE</Text>
         <TextInput value={this.state.age} onChangeText={(data) => this.setState({age: data})} style={{width:350,height:50,backgroundColor:'white',marginLeft:35,borderWidth:1,fontSize:20}}></TextInput> 
        
          <TouchableOpacity onPress={this.FieldEntry}>
         <View style={{backgroundColor:'gray',height:50,width:100,borderRadius:50,margin:10,marginLeft:35}}>
            <Text style={{color:'white',margin:15,marginLeft:5,fontSize:20}}>SUBMIT</Text></View>
         </TouchableOpacity> 
        </ScrollView>
        </View> 
    )
}
}