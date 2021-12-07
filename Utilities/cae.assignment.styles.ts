/**
 * Filename: cae.assignment.interface.ts
 * Description: This is the file for the interface of component.
 */

import { StyleSheet } from "react-native";
import { ColoPalette } from "./colors.constants";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ColoPalette.WHITE
    },
    stripContainer:{
        paddingVertical:20,
        backgroundColor:'grey',
        opacity:0.3,
        borderBottomWidth:2,
        borderTopWidth:2,
        marginTop:20,
        alignItems:'center'
    },
    stripHeadingText:{
        fontSize:20,
        alignSelf:'center',
        color:'#384049'
    }
})