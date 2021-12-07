/**
 * Filename: cae.assignment.interface.ts.
 * Description: This is the file for the interface of all screens.
 * CAE: Mobile Developer Assignment.
 */
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListTypes } from "../root-router.interface";
/**
 * @interface FlightsResponse
 * @description interface for the api response.
 */
export interface FlightsResponse{
    Flightnr:string;
    Date:string;
    AircraftType:string;
    Departure:string;
    Destination:string;
    Time_Depart:string;
    Time_Arrive:string;
    DutyID:string;
    DutyCode:string;
    Captain:string;
    First_Officer:string;
    Flight_Attendant:string
    Tail:string
}
/**
 * @interface FlightResponseState
 * @exports FlightResponseState
 * @description state for the listing of array of flights.
 */
export interface FlightResponseState{
    FlightDetails:Array<FlightsResponse>
}
/**
 * @type {FontScreenProps}
 * @exports RootStackParamListTypes
 * @description props for the frontscreen navigation.
 */
export type FontScreenProps=StackScreenProps<RootStackParamListTypes,'Frontscreen'>
/**
 * @type {DetailScreenProps}
 * @exports RootStackParamListTypes
 * @description props for the detailscreen navigation.
 */
export type DetailScreenProps=StackScreenProps<RootStackParamListTypes,'Detailscreen'>
