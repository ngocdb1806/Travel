import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    StyleSheet,
    Text,
    View,
    Picker,
    TouchableHighlight,
}from 'react-native';
import CheckBox from 'react-native-checkbox';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FloatingLabelInput from './FloatingLabelInput'
export default class OneDayOff extends Component{
    state = {
        email:'',
        workTime: '',
        choosedDate: 'Chọn ngày',
        isDateTimePickerVisible: false,
        choosedDay: '',
        choosedMonth: '',
        choosedYear: '',
        currentColor:"#000",
        isModalVisible: false,
    };
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
    
    _hideDateTimePicker = () => {
          this.setState({ isDateTimePickerVisible: false });
      }
    
    _handleDatePicked = (date) => {
        this.state.choosedDay = (new Date(date)).getDate();
        this.state.choosedMonth =(new Date(date)).getMonth() + 1;
        this.state.choosedYear = (new Date(date)).getFullYear();
        this.state.choosedDate = this.state.choosedDay + '/' + this.state.choosedMonth + '/' + this.state.choosedYear;
        this._hideDateTimePicker();
      };
    updateUser = (user) => {
        this.setState({ user: user })
     }
    updateWorkTime = (workTime) => {
        this.setState({ workTime: workTime })
     }
    handleTextChange = (newText) => this.setState({email: newText});
    render(){
        return(
            <View>
            <FloatingLabelInput label="Lý do"
            value={this.state.email} onChangeText={this.handleTextChange}
            />
            <View style={styles.ViewDateSelectPicker}>
                    <Text style={styles.TitleSelectPicker}>Ngày</Text>
                    <TouchableHighlight onPress={this._showDateTimePicker}>
                        <Text style={styles.DatePickerText}>{this.state.choosedDate}</Text>
                    </TouchableHighlight>    
                    <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                placeholder="Select date"
                                format="YYYY-MM-DD"
                    />    
            </View>
            <View style={styles.ShiftOffRules}>
                    <View style={styles.FromDayoffView}>
                        <CheckBox label='Ca chiều'/>
                    </View>
                    <View style={styles.FromDayoffView}>
                        <CheckBox label='Ca sáng'/>
                    </View>
            </View>
            <View style={styles.ViewDateSelectPicker}>
                <Text style={styles.TitleSelectPicker}>Người duyệt</Text>
                <Picker style={styles.selectPicker}
                selectedValue = {this.state.user} 
                onValueChange = {this.updateUser}>
                    <Picker.Item label = "Nam" value = "Nam" />
                    <Picker.Item label = "Nữ" value = "Nữ" />
                </Picker>
            </View>
            <View style={styles.DayOffRules}>
                <View style={styles.SevenColumn}>
                    <Text style={[styles.TitleColumnLeft,{color: "#0795db", fontWeight:"bold"}]}>Số ngày xin nghỉ phép:</Text>
                </View>
                <View style={styles.ThreeColumn}>
                    <Text style={[styles.TitleColumnRight,{color: "#0795db", fontWeight:"bold"}]}>25 ngày</Text>
                </View>
                    
            </View>
            <View style={styles.DayOffRules}>
                <View style={styles.column1}>
                    <Text style={styles.TitleColumn}>Sử dụng Quỹ nghỉ phép</Text>
                    <View style={styles.ContentsInColumn}>
                        <View style={styles.Row1} >
                            <CheckBox label=""/>
                            <Text>Hợp đồng lao động</Text>
                        </View>    
                        <View style={styles.Row2} >
                            <CheckBox label=""/>
                            <View style={styles.ViewRuleSelectPicker}>                                  
                                <Picker style={styles.selectPicker}
                                selectedValue = {this.state.workTime} 
                                onValueChange = {this.updateWorkTime}>
                                    <Picker.Item label = "Chế độ đặc biệt" value = "" />
                                </Picker>
                            </View>
                        </View>    
                        <View style={styles.Row1} >
                            <CheckBox label=''/>
                            <Text>Nghỉ tự do</Text>
                        </View>    
                    </View>                        
                </View>
                <View style={styles.column2}>
                    <Text style={styles.TitleColumn}>Có lương</Text>
                    <View style={styles.ContentsInColumn}>
                        <View style={styles.Row1} >
                            <Text>Có</Text>
                        </View>    
                        <View style={styles.Row2} >
                            <Text>Có</Text>
                        </View>    
                        <View style={styles.Row1} >
                            <Text>Có</Text>
                        </View>    
                    </View> 
                </View>
                <View style={styles.column2}>
                    <Text style={styles.TitleColumn}>Qũy còn</Text>
                    <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                        <View style={styles.Row1} >
                            <Text>1 ngày</Text>
                        </View>    
                        <View style={styles.Row2} >
                            <Text>1 ngày</Text>
                        </View>    
                        <View style={styles.Row1} >
                            <Text>1 ngày</Text>
                        </View>    
                    </View>
                </View>
                 <View style={styles.column2}>
                    <Text style={styles.TitleColumn}>Ngày nghỉ</Text>
                    <View style={styles.ContentsInColumn}>
                        <View style={styles.Row1} >
                            <Text>1 ngày</Text>
                        </View>    
                        <View style={styles.Row2} >
                            <Text>1 ngày</Text>
                        </View>    
                        <View style={styles.Row1} >
                            <Text>1 ngày</Text>
                        </View>    
                    </View>
                </View> 
            </View>              
        </View>
        );
    }
}
const styles = StyleSheet.create({
    DatePickerText:{
        marginTop: 10,
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
        paddingBottom: 15
    },
    ViewFloating:{
        marginTop: 30,
    },
    Title:{
        fontSize: 20,
        textAlign: 'left',
        color: '#1B5E20',
    },
    InputOf:{
        height: 45, 
        fontSize: 18, 
        color: '#000', 
    },
    selectPicker:{
        paddingLeft: 0,
    },
    TitleSelectPicker:{
        fontSize: 18,
        color: "#aaa",
        paddingLeft: 10,
    },
    FromDayoffView:{
        flex: 0.5,
    },
    ViewDateSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",   
        marginRight: 5,
        marginBottom: 20,
        marginTop: 20
    },
    ViewRuleSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",   
        marginRight: 5,
    },
    DayOffRules:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    ShiftOffRules:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    column1:{
        flex: 0.4
    },
    SevenColumn:{
        flex: 0.7
    },
    ThreeColumn:{
        flex: 0.3
    },
    column2:{
        flex: 0.2
    },
    TitleColumn:{
        fontSize: 15,
        color: "#aaa",
        paddingLeft: 10,
        paddingBottom: 20
    },
    TitleColumnRight:{
        color: "black",
        paddingLeft: 10,
        paddingBottom: 20,
        textAlign: 'right',
        fontSize: 18
    },
    TitleColumnLeft:{
        color: "black",
        paddingLeft: 10,
        paddingBottom: 20,
        textAlign: 'left',
        fontSize: 18
    },
    ContentsInColumn:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Row1:{
        height: 50,
        marginTop: 20
    },
    Row2:{
        height:70,
        
        marginTop: 20
    }
})

