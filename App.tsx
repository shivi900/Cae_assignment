
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from './Utilities/cae.assignment.styles'
export default class App extends Component {
  constructor(props:any){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.stripContainer}>
<Text style={styles.stripHeadingText}>ma 18 june,2018</Text>
        </View>
      </View>
      </SafeAreaView>
    )
  }
}