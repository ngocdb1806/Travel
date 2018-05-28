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
    KeyboardAvoidingView
}from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import DayOff from './DayOff'
import OTform from './OTform'
import FloatingLabelInput from '../components/FloatingLabelInput'
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
                <View style={styles.ViewButton}>                   
                    <TouchableOpacity  style={styles.EditButton} >
                        <View style={styles.Icon}>
                            <Icon  style={{color: 'white'}} name="ios-clock" size={30} />
                        </View>
                        <View style={styles.TitleButton}>
                            <Text style={{fontSize: 20,color: 'white'}}>Chấm công</Text>    
                        </View>
                                           
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.EditButton2} onPress={() => navigate('DayOff') }>
                        <View style={styles.Icon}>
                            <Icon  style={{color: '#0795db'}} name="md-plane" size={30} />
                        </View>
                        <View style={styles.TitleButton}>
                            <Text style={{fontSize: 20,color: '#0795db'}}>Xin nghỉ phép</Text>    
                        </View>
                                           
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.EditButton2} onPress={() => navigate('OTform') }>
                        <View style={styles.Icon}>
                            <Icon  style={{color: '#0795db'}} name="ios-timer-outline" size={30} />
                        </View>
                        <View style={styles.TitleButton}>
                            <Text style={{fontSize: 20,color: '#0795db'}}>Làm thêm giờ</Text>    
                        </View>
                                           
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewForm}>
                    <View style={styles.ImageView}>                                                    
                            <Image
                                style={{width: 130, height: 130 }}
                                source={require('../img/avatar.png')}
                    />                  
                    </View>
                    <StatusBar hidden/>
                    <View style={styles.MainInfoView}>
                        <View style={styles.MainLeftInfoView}>
                            <Text style={styles.EditText}>Số công đi làm</Text>
                            <Text style={styles.EditText}>Nghỉ có phép</Text>
                            <Text style={styles.EditText}>Nghỉ không lương</Text>
                            <Text style={styles.EditText}>Tổng số ngày công</Text>
                            <Text style={styles.EditText}>Chấm công không hợp lệ</Text>
                            <Text style={styles.EditText}>Thời gian làm việc trung bình</Text>
                        </View>
                        <View style={styles.MainRightInfoView}>
                            <Text style={styles.EditText}>1.5</Text>
                            <Text style={styles.EditText}>0</Text>
                            <Text style={styles.EditText}>8</Text>
                            <Text style={styles.EditText}>1.5/22</Text>
                            <Text style={styles.EditText}>0</Text>
                            <Text style={styles.EditText}>08:00:00</Text>
                        </View>
                    </View>
                    
                </View>             
            </ScrollView>
        );
    }
}
const App = StackNavigator({
    DayOff: { 
        screen: DayOff 
    },
    OTform: { 
        screen: OTform 
    },
});
const styles = StyleSheet.create({
    ImageView:{
        alignItems:'center',
        flex: 1,
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
        shadowOpacity: 0.5,
        shadowRadius: 2,
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
    }

})
