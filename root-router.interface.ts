import { FlightsResponse } from "./Utilities/cae.assignment.interface";

export type RootStack = Record<string,undefined|object>;
export type RootRouterProps = RootStackParamListTypes;
export interface RootStackParamListTypes extends RootStack{
['Frontscreen']:undefined;
['Detailcreen']:{flightdetails?:FlightsResponse}
}