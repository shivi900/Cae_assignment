/**
 * Filename: cae.assignment.styles.ts.
 * Description: This is the file for the common styles of all screens.
 * CAE: Mobile Developer Assignment.
 */

import { StyleSheet } from "react-native";
import { ColoPalette } from "./colors.constants";
/**
 * @exports StyleSheet
 * @description styesheet for the styles of Ui of screens.
 */
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColoPalette.WHITE
    },
    stripContainer: {
        paddingVertical: 10,
        backgroundColor: '#EBEBEB',

        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 20,
    },
    stripHeadingText: {
        fontSize: 18,
        marginStart: 16,
        color: 'black'
    },
    flightContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 20,

    },
    separaterLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey'

    },
    arrivalDepartureNmaes: {
        fontSize: 16,
        color: 'black',
        marginStart: 16,
        fontWeight: 'bold',
        bottom: 10
    },
    listContainer: { flex: 1, backgroundColor: 'white' },
    flightImage: { tintColor: 'black', marginStart: 16 },
    arrivalDepartureNamesText: { position: 'absolute', right: 20, alignSelf: 'center', bottom: 6, color: 'red' },
    detailsHeading:{fontSize:20,alignSelf:'center',marginTop:30,fontWeight:'bold'},
    detilsInformationContainer:{
        flexDirection:'column',
        marginStart:20,
        marginTop:28,
        justifyContent:'space-evenly',
        flex:1
    },
    detailsText:{
        fontSize:18,
        fontWeight:'bold',
        
    }
})