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
export default class ManyDaysOff extends Component{
    state = {
        email:'',
        choosedDate: 'Chọn ngày',
        isDateTimePickerVisible: false,
        choosedDay: '',
        choosedMonth: '',
        choosedYear: '',
        currentColor:"#000",
        isModalVisible: false,
        isSelectedValue: '',
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
           <View style={styles.TimeOff}>
                   <View style={styles.FromDayoffView}>
                       <Text style={styles.TitleDatetPicker}>Từ</Text>
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
                   <View style={styles.FromDayoffView}>
                           <Text style={styles.TitleDatetPicker}>Đến</Text>
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
                <View style={styles.column1}>
                    <Text style={[styles.TitleColumnLeft]}>Số ngày bạn sẽ nghỉ:</Text>
                    <Text style={[styles.TitleColumnLeft]}>Lịch nghỉ: 
                        <Text style={{fontStyle:'italic', color:'red'}}> Cuối tuần</Text>
                    </Text>
                    <Text style={[styles.TitleColumnLeft,{color: "#0795db", fontWeight:"bold"}]}>Số ngày xin phép nghỉ:</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={[styles.TitleColumnRight]}>25 ngày</Text>
                    <Text style={[styles.TitleColumnRight]}>25 ngày</Text>
                    <Text style={[styles.TitleColumnRight,{color: "#0795db", fontWeight:"bold"}]}>25 ngày</Text>
                </View>
                    
            </View>
           <View style={styles.DayOffRules}>
                  <View style={styles.column1}>
                      <Text style={styles.TitleColumnLeft}>Sử dụng Quỹ nghỉ phép</Text>
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
                                   <Picker.Item label = "Toàn thời gian" value = "Toàn thời gian" />
                                   <Picker.Item label = "Bán thời gian" value = "Bán thời gian" />
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
                      <Text style={styles.TitleColumnRight}>Ngày nghỉ</Text>
                      <View style={styles.ContentsInColumn}>
                       <View style={styles.Row1} >
                           <Text style={{textAlign:"right"}}>1 ngày</Text>
                       </View>    
                       <View style={styles.Row2} >
                           <Text style={{textAlign:"right"}}>1 ngày</Text>
                       </View>    
                       <View style={styles.Row1} >
                           <Text style={{textAlign:"right"}}>1 ngày</Text>
                       </View>    
                   </View>
                  </View>
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
    FromDayoffView:{
        flex: 0.5,
    },
    ViewSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",   
        marginRight: 5
    },
    DayOffRules:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20
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
    column1:{
        flex: 0.7
    },
    column2:{
        flex: 0.3
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
    SendButton:{
        flex: 0.5,
    },
    radioForm:{
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },
    ContentsInColumn:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    Row1:{
        height: 50,
        marginTop: 20,        
    },
    Row2:{
        height:70,        
        marginTop: 20
    },
    Notice:{
        color:"#c09853"
    },
    NoticeView:{
        backgroundColor: '#fcf8e3',
        marginTop: 20
    }
})

