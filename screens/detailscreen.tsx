/**
 * Filename: detailsscreen.tsx.
 * Description: This is the file for the details of flights.
 * CAE: Mobile Developer Assignment.
 */
import React, { Component, ReactElement } from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import styles from '../Utilities/cae.assignment.styles'
import { DetailScreenProps } from '../Utilities/cae.assignment.interface';
const LocalizedStrings = require('../Utilities/localization.json')
export default class DetailScreen extends Component<DetailScreenProps, null> {
    constructor(props: DetailScreenProps) {
        super(props);
    }
    /**
     * @returns {render}
     * @returns {JSX}
     * @description details of flight in jsx.
     */
    render():ReactElement {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.detailsHeading}>{LocalizedStrings.HEADING_DETAILS}</Text>
                    <View style={styles.detilsInformationContainer}>
                        <Text style={styles.detailsText}>{LocalizedStrings.FLIGHT_NAME}{' '}{this.props.route.params?.flightdetails?.Flightnr}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.DEPARTURE}{' '}{this.props.route.params?.flightdetails?.Departure}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.DESTINATION}{' '}{this.props.route.params?.flightdetails?.Destination}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.DEPART_TIME}{' '}{this.props.route.params?.flightdetails?.Time_Depart}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.ARRIVAL_TIME}{' '}{this.props.route.params?.flightdetails?.Time_Arrive}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.CAPTAIN}{' '}{this.props.route.params?.flightdetails?.Captain}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.DUTY_ID}{' '}{this.props.route.params?.flightdetails?.DutyID}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.DUTY_CODE}{' '}{this.props.route.params?.flightdetails?.DutyCode}</Text>
                        <Text style={styles.detailsText}>{LocalizedStrings.TAIL}{' '}{this.props.route.params?.flightdetails?.Tail}</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}