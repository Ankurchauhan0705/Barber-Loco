import React from 'react'
import { View ,Text, TouchableOpacity,Image} from 'react-native'
import arrow1 from '../img/logo/arrow1.png'
import notify from '../img/logo/notify.png'
import addtocart from '../img/logo/addtocart.png'
export default class Subheader extends React.Component{

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
             <TouchableOpacity style={{backgroundColor:''}} onPress={()=>this.state.nav.goBack()} >
             <Image source={arrow1} style={{width:40,height:40,marginLeft:10}}/>
            
             </TouchableOpacity>
             <Text style={{fontSize:30,marginLeft:10}}>{this.state.menu}</Text>
             </View>
            
                       </View>
            
        )
    }
}