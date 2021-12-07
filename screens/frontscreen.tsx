/**
 * Filename: frontscreen.tsx.
 * Description: This is the file for the listing of flights.
 * CAE: Mobile Developer Assignment.
 */
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
  /**
   * @function getFlightDetails
   * @private function.
   * @description function for the api of listing of flight details.
   */
  private getFlightDetails = async () => {
    const response = await axios.get<Array<FlightsResponse>>("https://rosterbuster.aero/wp-content/uploads/dummy-response.json")
    console.log('response', response);
    this.setState({
      FlightDetails: response.data
    })
  }
  /**
   * @function detailsFlight
   * @description Navu=igation to the details of flights.
   * @private function.
   */
  private detailsFlight=()=>{
    console.log('details',this.state.FlightDetails);
    this.props.navigation.navigate('Detailscreen',{flightDeatils:this.state.FlightDetails})
  }
  /**
   * @returns {render}
   * @description render function for the jsx for the listing of flights.
   * @returns {JSX}
   */
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
          style={styles.listContainer}
          keyExtractor={(item:FlightsResponse)=>item.DutyID.toString()}
          data={this.state.FlightDetails}
          renderItem={({ item }: { item: FlightsResponse }) => {
            return (
              <TouchableOpacity onPress={()=>this.detailsFlight()}  style={{
                backgroundColor: 'white'
              }}>
             <View style={styles.flightContainer}> 
           <Image style={styles.flightImage} source={ImageConstants.AEROPLANE}/>
                <Text style={styles.arrivalDepartureNmaes}>{item.Destination}-{item.Departure}</Text>
                <Text style={styles.arrivalDepartureNamesText}>{item.Time_Arrive}{'-'}{item.Time_Depart}</Text>
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