import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamListTypes } from "../root-router.interface";

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
}
export interface FlightResponseState{
    FlightDetails:Array<FlightsResponse>
}
export type FontScreenProps=StackScreenProps<RootStackParamListTypes,'Frontscreen'>
export type DetailScreenProps=StackScreenProps<RootStackParamListTypes,'Detailscreen'>
