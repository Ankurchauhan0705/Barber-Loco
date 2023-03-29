import React from "react";
import { FlatList, View, Image, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import a from '../../img/banner/aa.jpg';
import b from '../../img/banner/aaa.jpg';
import c from '../../img/banner/cc.png';
import d from '../../img/banner/dd.jpg';
import e from '../../img/banner/ee.jpg';
import f from '../../img/banner/ff.jpg';
import g from '../../img/banner/gg.jpg';
import h from '../../img/banner/hh.jpg';
import i from '../../img/banner/ii.jpg';
import { SliderBox } from "react-native-image-slider-box";
import { data } from '../../data/data';
import Header from "../../component/Header";
let images = [a, b, c, d, e, f, g, h, i]
export default class Home extends React.Component {

  constructor(props) {

    super(props);
    console.log(props);
    this.state = {
      datainfo: data
    }
    this.infoshow = this.infoshow.bind(this);

  }



  infoshow = (d) => {
    console.log(d);
    return (<View style={{ backgroundColor: 'white', height: 260, width: 200, marginLeft: 1 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Deatil', { item: d.item })}>
        <Image source={d.item.image} style={{ width: 160, height: 170, margin: 15, borderRadius: 30 }} />
        <Text>{d.item.Name}</Text>
        <Text>{d.item.Rate}</Text>
      </TouchableOpacity>
    </View>)

  }

  render() {
    const { datainfo } = this.state
    console.log("********* data info ***********");
    console.log(datainfo);
    console.log("*************************");

    return (
      <View style={{ backgroundColor: 'white', flex: 1, }}>
        <Header menu="Home" nav={this.props.navigation} />
        <SliderBox images={images} />


        <View style={{ flex: 1 }}>
          <FlatList
            data={datainfo}
            renderItem={this.infoshow}
            numColumns={2}
            keyExtractor={(index => index.id)}
          />
        </View>
      </View>
    )
  }
}
