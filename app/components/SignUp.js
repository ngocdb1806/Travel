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
}from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import FloatingLabelInput from './FloatingLabelInput';
import DrawerStack from "../stacks/DrawerStack";
export default class Details extends Component{
    state = {
        email:'',
        account: '',
        sex: '',
        workTime: '',
        choosedDate: '',
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
        const { navigate } = this.props.navigation;
        return(         
            <ScrollView style={styles.MainViewForm}>
                <View style={styles.ViewLogo}>                   
                    <Image
                        style={{width: 80, height: 80 }}
                        source={require('../img/logo-wisky-blue.png')}
                    />                  
                </View>
                <View style={styles.ViewForm}>
                <View style={styles.ShiftOffRules}>
                    <View style={styles.FromDayoffView}>
                    <FloatingLabelInput label="Họ"
                        value={this.state.email} onChangeText={this.handleTextChange}/>
                    </View>
                    <View style={styles.FromDayoffView}>
                    <FloatingLabelInput label="Tên"
                        value={this.state.email} onChangeText={this.handleTextChange}/>
                    </View>
                </View>
                <FloatingLabelInput label="Email"
                        value={this.state.email} onChangeText={this.handleTextChange}/> 
                <FloatingLabelInput label="Mật khẩu"
                        value={this.state.email} onChangeText={this.handleTextChange}/>
                <FloatingLabelInput label="Tên công ty"
                value={this.state.email} onChangeText={this.handleTextChange}
                    />
                <FloatingLabelInput label="Số điện thoại"
                value={this.state.email} onChangeText={this.handleTextChange}
                    />
                <View style={styles.ButtonView}>
                    <Button title="Bắt đầu ngay" onPress={() => navigate('DrawerStack') }/>                     
                </View>
                <Text style={styles.Remind}>Bạn đã có tài khoản? 
                    <Text style={{color:'#0795db'}}> Đăng nhập tại đây</Text>
                </Text>
                </View>   
                         
            </ScrollView>
        );
    }
}
const App = StackNavigator({
    DrawerStack: { screen: DrawerStack }
  });
const styles = StyleSheet.create({
    ImageView:{
        alignItems:'center',
        flex: 1,
    },
    MainViewForm:{
        flex: 1
    },
    ViewLogo:{
        padding: 10, 
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
        marginBottom: 20,
        alignItems: 'center'
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
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    Title:{
        fontSize: 18,
        textAlign: 'left',
        color: '#1B5E20',
    },
    InputOf:{
        height: 45, 
        fontSize: 18, 
        color: '#000', 
    },
    ViewFloating:{
        marginTop: 30,
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
    EditText:{
        marginBottom: 20
    },
    
    EditButton:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        marginTop: 20,
        backgroundColor: '#0795db',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5 ,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        
    },
    EditButton2:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#0795db',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        
    },
    TitleButton: {
        flex: 0.8,
        alignItems: 'center',
        
    },
    Icon: {
        flex: 0.2,
        alignItems: 'center',
    },
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
    ButtonView:{
        flex: 1,
        marginTop: 30,
        marginBottom: 20
    },
    ShiftOffRules:{
        flex: 1,
        flexDirection: 'row',
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
    },
    Remind:{
        fontSize: 16
    }

})
