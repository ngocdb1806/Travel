import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    Animated,
    ScrollView,
    Picker,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Button, 
    KeyboardAvoidingView,
}from 'react-native';
import CheckBox from 'react-native-checkbox';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FloatingLabelInput from './FloatingLabelInput'
export default class HourOff extends Component{
    state = {
        isDisplay: '',
        email:'',
        choosedDate: 'Chọn ngày',
        isDateTimePickerVisible: false,
        choosedDay: '',
        choosedMonth: '',
        choosedYear: '',
        user: '',
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
            <View >
            <FloatingLabelInput label="Lý do"
                value={this.state.email} onChangeText={this.handleTextChange}
            />
            <View style={styles.TimeOff}>
                        <View style={styles.DayoffView}>
                                <Text style={styles.TitleDatetPicker}>Ngày</Text>
                                <TouchableHighlight style={styles.DatePicker} onPress={this._showDateTimePicker}>
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
                        <View style={styles.FromTimeoffView}>
                            <View style={styles.ViewSelectPicker}>
                                <Text style={styles.TitleSelectPicker}>Từ</Text>
                                <Picker style={styles.selectPicker}
                                selectedValue = {this.state.user} 
                                onValueChange = {this.updateUser}>
                                    <Picker.Item label = "Nam" value = "Nam" />
                                    <Picker.Item label = "Nữ" value = "Nữ" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.ToTimeoffView}>
                            <View style={styles.ViewSelectPicker}>
                                <Text style={styles.TitleSelectPicker}>Đến</Text>
                                <Picker style={styles.selectPicker}
                                selectedValue = {this.state.user} 
                                onValueChange = {this.updateUser}>
                                    <Picker.Item label = "Nam" value = "Nam" />
                                    <Picker.Item label = "Nữ" value = "Nữ" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ViewSelectPicker}>
                    <Text style={styles.TitleSelectPicker}>Người duyệt</Text>
                    <Picker style={styles.selectPicker}
                    selectedValue = {this.state.user} 
                    onValueChange = {this.updateUser}>
                        <Picker.Item label = "Nam" value = "Nam" />
                        <Picker.Item label = "Nữ" value = "Nữ" />
                    </Picker>
                </View>
                <View style={styles.MainInfoView}>
                        <View style={styles.MainLeftInfoView}>
                            <Text style={styles.titleTotal}>Số giờ xin nghỉ phép</Text>
                        </View>
                        <View style={styles.MainRightInfoView}>
                            <Text style={styles.EditText}>1.5</Text>
                        </View>
                </View>
                <View style={styles.NoticeView}>
                    <Text style={styles.Notice}>Lưu ý: Chức năng nghỉ theo giờ chỉ để báo cáo, không tính vào nghỉ phép.</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    DatePicker:{
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        marginLeft: 5,
    },
    DatePickerText:{
        marginTop: 10,
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
        paddingBottom: 15
    },
    InputOf:{
        height: 45, 
        fontSize: 18, 
        color: '#000', 
    },
    titleTotal:{
        fontSize: 18,
        textAlign: 'left',
        color: '#0795db',
        fontWeight: 'bold'
    },
    ViewFloating:{
        marginTop: 30,
    },
    selectPicker:{
        paddingLeft: 0,
    },
    TitleSelectPicker:{
        fontSize: 18,
        color: "#aaa",
        paddingLeft: 10,
    },
    TitleDatetPicker:{
        fontSize: 18,
        color: "#aaa",
        paddingLeft: 10,
    },
    TimeOff:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    DayoffView:{
        flex: 0.4,
        marginRight: 5
    },
    ToTimeoffView:{
        flex: 0.3,
    },
    FromTimeoffView:{
        flex: 0.3,
    },
    ViewSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",   
        marginRight: 5
    },
    MainRightInfoView:{
        flex: 0.3,
        alignItems: 'flex-end',
    },
    MainLeftInfoView:{
        flex: 0.7,
        alignItems: 'flex-start',
    },
    MainInfoView:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,

    },
    Notice:{
        color:"#c09853"
    },
    NoticeView:{
        backgroundColor: '#fcf8e3',
        marginTop: 20
    }
})

