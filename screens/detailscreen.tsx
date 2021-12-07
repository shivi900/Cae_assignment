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
import { DetailScreenProps, FlightsResponse } from '../Utilities/cae.assignment.interface';
import { FlightResponseState } from '../Utilities/cae.assignment.interface'
import { ImageConstants } from '../image.constants';
export default class DetailScreen extends Component<DetailScreenProps, null> {
    constructor(props:DetailScreenProps){
        super(props);
    }
    render(){
        console.log('props----->>>>',this.props.route.params);
        return(
            <View style={{
                flex:1
            }}>

            </View>
        )
    }
}