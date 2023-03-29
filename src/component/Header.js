import React from 'react';
import { View ,Text, TouchableOpacity,Image} from 'react-native';
import menu from '../img/logo/menu.png';
import notify from '../img/logo/notify.png';
import addtocart from '../img/logo/addtocart.png';
import appointment from '../img/logo/appointment.png';
export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state={...props}
        console.log(props);
    }
    render(){
        console.log(this.state.menu);
        return(
        
        <View style={{backgroundColor:'tan',padding:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
             <TouchableOpacity style={{backgroundColor:''}} onPress={()=>this.state.nav.openDrawer()} >
             <Image source={menu} style={{width:25,height:25}}/>
            
             </TouchableOpacity>
             <Text style={{fontSize:30}}>{this.state.menu}</Text>
             </View>
               
             
             <View style={{}}>
             <TouchableOpacity style={{backgroundColor:''}} onPress={()=>this.state.nav.navigate('appointment')} >
             <Image source={appointment} style={{width:25,height:25,marginRight:10}}/>
             </TouchableOpacity>
             </View>  

             <View style={{}}>
             <TouchableOpacity style={{backgroundColor:''}} onPress={()=>this.state.nav.navigate('notification')} >
             <Image source={notify} style={{width:25,height:25,marginRight:10}}/>
            
             </TouchableOpacity>
             </View>
            
             <View style={{}}>
             <TouchableOpacity style={{backgroundColor:''}} onPress={()=>this.state.nav.navigate('card')} >
             <Image source={addtocart} style={{width:25,height:25,marginRight:10}}/>
            
             </TouchableOpacity>
             </View>
            
                       </View>
            
        )
    }
}