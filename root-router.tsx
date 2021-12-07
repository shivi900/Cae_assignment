/**
 * Filename: root-router.tsx.
 * Description: This is the file for the routing of screens.
 * CAE: Mobile Developer Assignment.
 */
import { createStackNavigator } from '@react-navigation/stack';
import React,{ Component, ReactElement } from 'react';
import { RootRouterProps, RootStackParamListTypes } from './root-router.interface';
import FrontScreen from './screens/frontscreen'
import DetailScreen from './screens/detailscreen'
const Stack =createStackNavigator<RootStackParamListTypes>();
/**
 * @class {RootRouter}
 * @exports RootRouter
 * @extends {Component}
 * @interface RootRouterProps
 * @description root router for the stacks screen navigation.
 */
class RootRouter extends Component <RootRouterProps>{
    constructor(props:RootRouterProps){
        super(props);
    }
    public render():ReactElement<RootRouterProps>{
        return(
            <Stack.Navigator headerMode={'none'} initialRouteName={'Frontscreen'}>
                <Stack.Screen name={'Frontscreen'} component={FrontScreen}/>
                <Stack.Screen name={'Detailscreen'} component={DetailScreen}/>
            </Stack.Navigator>
        )
    }
}
export default RootRouter;