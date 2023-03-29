import React from "react";
import {View,Text, ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import a from '../../img/background.jpg';

class  Login extends React.Component{
  constructor(props){
    super(props)
//console.log(props);
    this.LoginUser = this.LoginUser.bind(this);

    this.state={
      email:'',
      pass:''
    }
  }

  LoginUser(){
    const{email,pass} = this.state
console.log(email);
console.log(pass);
    alert(email);
    if(email==="abcd@gmail.com" && pass==="12345"){
    this.props.navigation.navigate('Adminnav');
    }
  }

render(){
  return(
     
    <ImageBackground source={a} style={{width:400,height:800,flex:1}}>
    <ScrollView>
         <Text style={{color:'black',fontSize:64,textAlign:'center',marginTop:60,fontWeight:'bold'}}>Login</Text>
             <View style={{backgroundColor:'white',height:620,width:400,marginTop:40,borderTopLeftRadius:150,marginLeft:5 }}>
              <Text style={{color:'darkgreen',fontSize:50,fontWeight:'700',fontFamily:'Roboto',textAlign:'center',marginTop:80}}>Welcome Back </Text>
              <Text style={{fontSize:25,textAlign:'center',color:'black'}}>Login to your account</Text>

              <TextInput placeholder="Username/Email"  value={this.state.email} onChangeText={(email)=>this.setState({email})} 
              style={{textAlign:'center',fontSize:20,backgroundColor:'gray',width:300,height:50,margin:30,marginTop:50,borderRadius:100}}>
               </TextInput>

              
              <TextInput placeholder="Password" value={this.state.pass} onChangeText={(pass)=>this.setState({pass})} style={{textAlign:'center',fontSize:20, backgroundColor:'gray',width:300,
              height:50,margin:30,borderRadius:100,marginTop:0}}>
                  </TextInput>


              <TouchableOpacity>
               <Text style={{color:'darkgreen',textAlign:'right',marginRight:50,fontWeight:'bold',marginTop:5,}}>
                Forget Password?</Text> 
                </TouchableOpacity>

                <TouchableOpacity onPress={this.LoginUser}>
             <View style={{backgroundColor:'darkgreen',width:300,height:50,margin:40,borderRadius:30,marginTop:20}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center',marginTop:10}}>
                Login</Text>
              </View>


              </TouchableOpacity>
              <Text style={{color:'red',textAlign:'center'}}>Don't have an account ?</Text>
              <TouchableOpacity  >
               <Text style={{color:'darkgreen',marginLeft:270,marginTop:-15}}>Signup</Text>
               </TouchableOpacity>
             </View>
             </ScrollView>
      </ImageBackground>  
  )
}
}

export default Login;