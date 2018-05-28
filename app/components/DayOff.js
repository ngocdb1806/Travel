import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    Button, 
}from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import HourOff from "./HourOff";
import OneDayOff from "./OneDayOff"
import ManyDaysOff from "./ManyDaysOff"
export default class DayOff extends Component{
    state = {
        isSelectedValue: '',
        partials:''
    };
    setSelectedValue = (value) => this.setState({ isSelectedValue : value});
    render(){
        console.log('State Change');
        var partial;
        if(this.state.isSelectedValue == 0){
            partial = <HourOff/>
        }
        else if(this.state.isSelectedValue == 1){
            partial = <OneDayOff/>        
        }
        else if (this.state.isSelectedValue == 2){
            partial = <ManyDaysOff/>         
        }
        return(
            <ScrollView style={styles.MainViewForm}>
                <View style={styles.ViewForm}>
                    <Text  style={styles.Title}>Đơn xin nghỉ phép</Text>
                    <StatusBar hidden/>
                    <RadioForm style={styles.radioForm}
                        radio_props={radio_props}
                        onPress={this.setSelectedValue}
                        formHorizontal={true}
                        animation = {false}
                    />
                    {partial}
                    <View style={styles.TimeOff}>
                        <View style={styles.SendButton}>
                        </View> 
                        <View style={styles.SendButton}>
                            <Button title="Gửi" onPress={()=>{}}/>
                        </View>                           
                    </View>
                </View>           
            </ScrollView>
        );
    }
}
var radio_props = [
    {label: 'Theo giờ', value: 0 },
    {label: '1 ngày', value: 1 },
    {label: 'Dài ngày', value: 2 }
  ];
const styles = StyleSheet.create({
    MainViewForm:{
        flex: 1
    },
    ViewForm:{
        padding: 30, 
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    Title:{
        fontSize: 20,
        textAlign: 'left',
        color: '#0795db',
        fontWeight: '600'
    },
    TimeOff:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    SendButton:{
        flex: 0.5,
    },
    radioForm:{
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },
})

