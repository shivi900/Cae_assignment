/**
 * Filename: cae.assignment.interface.ts
 * Description: This is the file for the interface of component.
 */

import { StyleSheet } from "react-native";
import { ColoPalette } from "./colors.constants";
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
    arrivalDepartureNamesText: { position: 'absolute', right: 20, alignSelf: 'center', bottom: 6, color: 'red' }
})