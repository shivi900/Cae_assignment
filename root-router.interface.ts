/**
 * Filename: root-router.interface.ts.
 * Description: This is the file for the interface of navigation screens.
 * CAE: Mobile Developer Assignment.
 */
import { FlightsResponse } from "./Utilities/cae.assignment.interface";

/**
 * 
 * @exports RootRouterProps
 * @exports RootStackParamListTypes
 * @exports RootStack
 * @interface RootStackParamListTypes
 * @description root interface file for the screen navigations.
 * 
 */

export type RootStack = Record<string,undefined|object>;
export type RootRouterProps = RootStackParamListTypes;
export interface RootStackParamListTypes extends RootStack{
['Frontscreen']:undefined;
['Detailscreen']:{flightdetails?:FlightsResponse}
}