import { AppRegistry,
    ToolbarAndroid,
    View,
    StyleSheet
 } from 'react-native';
import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';
import Login from "./app/components/Login";
import DrawerNavigation from "./app/stacks/DrawerStack";
import Details from "./app/components/Details";
import DayOff from "./app/components/DayOff";
import OTform from "./app/components/OTform"
import SignUp from "./app/components/SignUp"
export default class LoginReactNative extends Component{
    render(){
        return(
            <RootStack/>
            
        );
    }
    navigatorRenderScene(route, navigator){
        _navigator = navigator;
        switch(route, id){
            case "Login": 
                return(<Login navigator = {navigator} />);
            case "DrawerNavigation": 
                return(<DrawerNavigation navigator = {navigator} />);
            case "Details": 
                return(<Details navigator = {navigator} />);
            case "DayOff": 
                return(<DayOff navigator = {navigator} />);
            case "OTform": 
                return(<OTform navigator = {navigator} />);
            case "SignUp": 
                return(<SignUp navigator = {navigator} />)
        }
    }
}
const RootStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        DrawerNavigation:{
            screen: DrawerNavigation,
        },
        Details:{
            screen: Details,
        },
        DayOff:{
            screen: DayOff,
        },
        OTform:{
            screen: OTform,
        },
        SignUp:{
            screen: SignUp,
        }


    },
    {
        headerMode: 'none',
        initialRouteName: 'SignUp',
        renderScene : LoginReactNative.navigatorRenderScene
    }
);
AppRegistry.registerComponent('LoginReactNative', () => LoginReactNative);
