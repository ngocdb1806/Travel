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
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
class FloatingLabelInput extends Component{
    state={
        isFocused : false,
    };

    componentWillMount(){
        this._animatedIsFocused =  new Animated.Value(this.props.value === '' ? 0:1);
    }
    handleFocus = () => this.setState({isFocused : true});
    handleBlur = () => this.setState({isFocused : false});
    componentDidUpdate(){
        Animated.timing(this._animatedIsFocused,{
            toValue: (this.state.isFocused || this.props.value !== '')? 1 : 0,
            duration: 200,
        }).start();
    }
    render(){
        const{label, ...props} = this.props;    
        const{isFocused} = this.state;
        const labelStyle ={
            position: 'absolute',
            top: this._animatedIsFocused.interpolate({
                inputRange: [0,1],
                outputRange: [10,-20],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0,1],
                outputRange: [18, 14],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0,1],
                outputRange: ['#aaa', '#000'],
            }),            
            left: 0,
            paddingLeft: 5,
        }   
        return(
            <View style={styles.ViewFloating}>
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
                <TextInput {...props}
                    style={styles.InputOf}
                    onFocus = {this.handleFocus}
                    onBlur = {this.handleBlur}
                />
            </View>
        )
    }
}
export default class OTform extends Component{
    state = {
        email:'',
        account: '',
        sex: '',
        workTime: '',
        choosedDate: 'Chọn ngày',
        isDateTimePickerVisible: false,
        choosedDay: '',
        choosedMonth: '',
        choosedYear: '',
        currentColor:"#000",
        isModalVisible: false
    };
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true});
    
    _hideDateTimePicker = () => {
          this.setState({ isDateTimePickerVisible: false });
      }
    
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
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
    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });
    render(){
        return(
            <ScrollView style={styles.MainViewForm}>
                <View style={styles.ViewForm}>
                    <Text  style={styles.Title}>Đơn đăng ký làm thêm giờ</Text>
                    <StatusBar hidden/>
                    <FloatingLabelInput label="Nội dung"
                    value={this.state.email} onChangeText={this.handleTextChange}
                    />
                    <View style={styles.ViewSelectPicker}>
                        <Text style={styles.TitleSelectPicker}>Ngày</Text>
                        <TouchableHighlight style={styles.DatePicker} onPress={this._showDateTimePicker}>
                            <Text style={styles.DatePickerText}>{this.state.choosedDate}</Text>
                        </TouchableHighlight>        
                    </View>          
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        placeholder="Select date"
                        format="YYYY-MM-DD"
                    />
                    <View style={styles.TimeOff}>
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
                        <View style={styles.FromTimeoffView}>
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
const Dimensions = require('Dimensions');
const styles = StyleSheet.create({
    ImageView:{
        width: 135,
        height: 135,
        borderWidth: 3,
        borderColor: '#ccc',
        marginLeft: 20,
        marginTop: 5,
        borderStyle: 'dotted'

    },
    DatePicker:{
        marginLeft: 5,
    },
    DatePickerText:{
        marginTop: 10,
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
        paddingBottom: 15
    },
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
    InputOf:{
        height: 45, 
        fontSize: 18, 
        color: '#000', 
    },
    titleTotal:{
        fontSize: 18,
        textAlign: 'left',
        color: '#1B5E20',
    },
    ViewFloating:{
        marginTop: 30,
    },
    ViewImgPicker: {  
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
    TouchImage:{
        backgroundColor: 'blue'
    },
    TimeOff:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    SendButton:{
        flex: 0.5,
    },
    FromTimeoffView:{
        flex: 0.5,
    },
    ViewSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",   
        marginRight: 5,
        marginTop: 20,
    },
    MainRightInfoView:{
        flex: 0.3,
        alignItems: 'flex-end',
        width:  Dimensions.get('window') /2,
    },
    MainLeftInfoView:{
        flex: 0.7,
        alignItems: 'flex-start',
        width:  Dimensions.get('window') /2,
    },
    MainInfoView:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,

    },
    DayOffRules:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    column1:{
        flex: 0.4
    },
    column2:{
        flex: 0.2
    },
    TitleColumn:{
        fontSize: 15,
        color: "#aaa",
        paddingLeft: 10,
        paddingBottom: 20
    }
    
})
