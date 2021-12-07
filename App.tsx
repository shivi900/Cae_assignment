/**
 * Filename: App.tsx.
 * Description: This is the main wrapping file for the project.
 * CAE: Mobile Developer Assignment.
 */
import { StackScreenProps } from "@react-navigation/stack";
import { View } from "react-native";
import RootRouter from "./root-router";
import { RootStackParamListTypes } from "./root-router.interface";
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

/**
 * @type {AppProps}
 * @description type for the type of stacks.
 */

type AppProps = {} & StackScreenProps<RootStackParamListTypes, ''>

/**
 * @exports App
 * @extends {Component}
 * @type {AppProps}
 * @description main file for wrapping all screens.
 */
export default class App extends Component<AppProps, null>{
  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <NavigationContainer>
          <RootRouter Frontscreen={undefined} Detailscreen={undefined} />
        </NavigationContainer>
      </View>
    )
  }
}