
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../Utilities/cae.assignment.styles'
import axios from 'axios';
import { FlightsResponse, FontScreenProps } from '../Utilities/cae.assignment.interface';
import { FlightResponseState } from '../Utilities/cae.assignment.interface'
import { ImageConstants } from '../image.constants';
export default class FrontScreen extends Component<FontScreenProps, FlightResponseState> {
  constructor(props: FontScreenProps) {
    super(props);
    this.state = {
      FlightDetails: []
    }
  }
  componentDidMount() {
    this.getFlightDetails();
  }
  private getFlightDetails = async () => {
    const response = await axios.get<Array<FlightsResponse>>("https://rosterbuster.aero/wp-content/uploads/dummy-response.json")
    console.log('response', response);
    this.setState({
      FlightDetails: response.data
    })
  }
  private detailsFlight=()=>{
    console.log('details',this.state.FlightDetails);
    
    this.props.navigation.navigate('Detailscreen',{flightDeatils:this.state.FlightDetails})
  }
  render() {
    console.log('dataaaa----->>>>',this.state.FlightDetails);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.stripContainer}>
          <Text
            style={styles.stripHeadingText}>ma 18 june,2018</Text>
        </View>
        <View style={{flex:1}}>
        <FlatList
          style={{ flex: 1, backgroundColor: 'white' }}
          keyExtractor={(item:FlightsResponse)=>item.DutyID.toString()}
          data={this.state.FlightDetails}
          renderItem={({ item }: { item: FlightsResponse }) => {
            return (
              <TouchableOpacity onPress={()=>this.detailsFlight()}  style={{
                backgroundColor: 'white'
              }}>
             <View style={styles.flightContainer}> 
           <Image style={{tintColor:'black',marginStart:16}} source={ImageConstants.AEROPLANE}/>
                <Text style={styles.arrivalDepartureNmaes}>{item.Destination}-{item.Departure}</Text>
                <Text style={{position:'absolute',right:20,alignSelf:'center',bottom:6,color:'red'}}>{item.Time_Arrive}{'-'}{item.Time_Depart}</Text>
                </View>
                
                <View style={styles.separaterLine}></View>
              </TouchableOpacity>
            )
          }}
        />
        </View>
      </SafeAreaView>
    )
  }
}