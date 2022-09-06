import React,{component} from"React";

import {
  View,
  text,
  flatList,
  styleSheet,
  Alert,
  SafeAreaView,
} from " react-native";

import{listItem} from "react-native-elements";
import  axios from "axios";

export default  class HomeScreen  extends component{
constructor(props){
  super (props);
  this.state = {
    listData : [],
    url:"https://localhost:5500/"
  };
}

componentDidMOunt(){
  this.getPlanets();
}

 getPlanets = () =>{
const{url} = this.state;

axios
.get(url)
.then(response => {
return this.setstate({
  
  listdata:response.data.data
});
  
})
.catch(error => {
  Alert.alert(error.message)

});
  
};

renderItem = ({item,index}) =>(
  <ListItem
  key = {index}
  tittle = { ` planet : ${item.name}`}
 subtitle = {`distance from earth`}
titlestyle = {styleSheet.title}
 containerStyle = {styleSheet.listContainer}

 bottomDivider

 chevron

 onPress={()=>
this.props.navigation.navigate("details")
}


  
  
)
 }


