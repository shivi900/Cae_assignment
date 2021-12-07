
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   Image
// } from 'react-native';
// import styles from './Utilities/cae.assignment.styles'
// import axios from 'axios';
// import { FlightsResponse } from './Utilities/cae.assignment.interface';
// import { FlightResponseState } from './Utilities/cae.assignment.interface'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { ImageConstants } from './image.constants';
// export default class App extends Component<null, FlightResponseState> {
//   constructor(props: null) {
//     super(props);
//     this.state = {
//       FlightDetails: null
//     }
//   }
//   componentDidMount() {
//     this.getFlightDetails();
//   }
//   private getFlightDetails = async () => {
//     const response = await axios.get<Array<FlightsResponse>>("https://rosterbuster.aero/wp-content/uploads/dummy-response.json")
//     console.log('response', response);
//     this.setState({
//       FlightDetails: response.data
//     })

import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import RootRouter from "./root-router";
import { RootStackParamListTypes } from "./root-router.interface";
import React,{Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
//   }
//   render() 
//     console.log('dataaaa----->>>>',this.state.FlightDetails);
    
//     return (
//       <SafeAreaView style={styles.container}>

//         <View style={styles.stripContainer}>
//           <Text
//             style={styles.stripHeadingText}>ma 18 june,2018</Text>
//         </View>
//         <View style={{flex:1}}>
//         <FlatList
//         // contentContainerStyle={{justifyContent:'center',alignSelf:'center'}}
//           style={{ flex: 1, backgroundColor: 'white' }}
//           keyExtractor={(item:FlightsResponse)=>item.DutyID.toString()}
//           data={this.state.FlightDetails}
//           renderItem={({ item }: { item: FlightsResponse }) => {
//             return (
//               <View style={{
//                 backgroundColor: 'white'
//               }}>
//              <View style={styles.flightContainer}> 
//            <Image style={{tintColor:'black',marginStart:16}} source={ImageConstants.AEROPLANE}/>
//                 <Text style={styles.arrivalDepartureNmaes}>{item.Destination}-{item.Departure}</Text>
              
//                 <Text style={{position:'absolute',right:20,alignSelf:'center',bottom:6,color:'red'}}>{item.Time_Arrive}{'-'}{item.Time_Depart}</Text>
//                 </View>
//                 <View style={styles.separaterLine}></View>
//               </View>
//             )
//           }}
//         />
//         </View>
//       </SafeAreaView>
//     )
//   }
// }
type AppProps = {} & StackScreenProps<RootStackParamListTypes,''>
export default class App extends Component<AppProps,null>{
  render(){
    return(
      <View style={{
        flex:1,
    
      }}>
        <NavigationContainer>
<RootRouter Frontscreen={undefined} DetailScreen={undefined}/>
</NavigationContainer>
      </View>
    )
  }
}