import { 
    AppRegistry,
    TouchableHighlight,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';
import DrawerScreen from "../stacks/DrawerScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../components/Details';
import DayOff from '../components/DayOff';
import OTform from '../components/OTform';
const DrawerStack = StackNavigator(
    {
        DrawerStack: {
            screen: DrawerScreen,
        },
        Details: 
        { 
            screen: Details ,
        },
        DayOff: { 
            screen: DayOff 
        },
        OTform: { 
            screen: OTform 
        },
    },
    {
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                padding: 15, 
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 10,
                
            },
            headerTitle:
                <View>
                <TouchableHighlight  onPress={() => navigation.navigate('Details') }>
                    <Text style={{fontSize: 30, color:'#0795db', fontWeight:'600'}}>WISKY</Text>
                </TouchableHighlight>
            </View>
            ,
            headerLeft: 
                <View>
                    <TouchableHighlight onPress={() => {
                        if(navigation.state.index== 0){
                            navigation.navigate('DrawerOpen');
                        }else{
                            navigation.navigate('DrawerClose');
                        }                        
                    }}>
                        <Icon name="ios-menu" size={30} />
                    </TouchableHighlight>
                </View>
        })
    }
);
export default DrawerStack;