import {
    AppRegistry,
    TouchableHighlight
} from 'react-native';
import React, {
    Component
} from 'react'
import {
    StackNavigator,
} from 'react-navigation';
import {
    DrawerNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Login from "../components/Login";
const DrawerScreen = DrawerNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            title: "Chấm công",
            drawerIcon: (<Icon name="ios-clock" size={30} />),
        },  
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            title: "Nhân sự",
            drawerIcon: (<Icon name="ios-people" size={30} />),
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Đăng xuất",
            drawerIcon: (<Icon name="md-log-out" size={30} />),
            headerMode: "none",
            header: null
        },        
    }
}, {
    headerMode: 'none',
    contentOptions: {
        activeTintColor: '#0795db',
    },
    
})
export default DrawerScreen;