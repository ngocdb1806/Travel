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
export default class Screen2 extends Component{
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
        const {goBack} = this.props.navigation;
        let img = this.state.avatarSource == null? <Image
        style={{width: 130, height: 130}}
        source={require('../img/avatar.png')}
        />: <Image source={this.state.avatarSource} style={{width: 130, height: 130}}/>
        return(
            <View style={styles.MainViewForm}>
                <View  style={{flex: 0.9}}>
                <ScrollView style={styles.MainViewForm}>
                <View style={styles.ViewForm}>
                    <Text  style={styles.Title}>Tài khoản đăng nhập</Text>
                    <StatusBar hidden/>
                    <FloatingLabelInput label="Email"
                    value={this.state.email} onChangeText={this.handleTextChange} 
                    />
                    <FloatingLabelInput label="Tài khoản đăng nhập"
                    value={this.state.account} onChangeText={this.handleTextChange}
                    />
                    <View style={styles.ViewImgPicker}>
                        <Text style={styles.TitleSelectPicker}>Ảnh đại diện</Text>
                        <View style={styles.ImageView}>                                                    
                            <TouchableHighlight  onPress={this.show.bind(this)}>
                                {img}
                            </TouchableHighlight> 
                        </View>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row'}}> 
                        <View style = {{width: 200}}>
                            <FloatingLabelInput label="Mật khẩu"
                            value={this.state.account} onChangeText={this.handleTextChange}  editable={false}/>
                        </View>      
                        <View style = {{width: 100}}>
                            <TouchableHighlight
                                onPress={this._toggleModal}>
                                <Icon name="ios-create" size={30} style = {{paddingTop: 40, paddingLeft: 50}}/>
                            </TouchableHighlight>  
                        </View>  
                        
                        <View style={{ flex: 1}}>
                            <Modal isVisible={this.state.isModalVisible} style={{backgroundColor:'white', borderRadius: 5, padding: 30, height: 200, marginTop: 30}}>
                            <ScrollView>
                                <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
                                
                                        <View style={{ alignItems: 'center'}}>
                                        <Image
                                            style={{width: 100, height: 100,}}
                                            source={require('../img/logo-wisky-blue.png')}
                                            />
                                        </View>
                                        
                                        <FloatingLabelInput label="Mật khẩu hiện tại"
                                            value={this.state.account} onChangeText={this.handleTextChange}
                                            />
                                            <FloatingLabelInput label="Mật khẩu mới"
                                            value={this.state.account} onChangeText={this.handleTextChange}
                                            />
                                            <FloatingLabelInput label="Nhập lại mật khẩu mới"
                                            value={this.state.account} onChangeText={this.handleTextChange}
                                            />
                                        
                                    
                                        <View  style={{ flex: 2 , flexDirection: "row", marginTop: 30}}>
                                            <TouchableOpacity style={{flex: 1}}>
                                                <Button title="Hủy" onPress={this._toggleModal} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{flex: 1, marginLeft: 20}}>
                                                <Button title="Lưu" onPress={() => {}}/>
                                            </TouchableOpacity>
                                        </View>                                       
                                        
                                </KeyboardAvoidingView>
                                </ScrollView>
                            </Modal>
                        </View>       
                                                                 
                    </View>
                </View>
                <View style={styles.ViewForm}>
                    <Text  style={styles.Title}>Hồ sơ cá nhân</Text>
                    <StatusBar hidden/>
                    <FloatingLabelInput label="Họ(*)"
                    value={this.state.email} onChangeText={this.handleTextChange}
                    />
                    <FloatingLabelInput label="Tên đệm"
                    value={this.state.account} onChangeText={this.handleTextChange}
                    />
                    <FloatingLabelInput label="Tên"
                    value={this.state.account} onChangeText={this.handleTextChange}
                    />                   
                    <View style={styles.ViewSelectPicker}>
                        <Text style={styles.TitleSelectPicker}>Chế độ làm việc(*)</Text>
                        <Picker style={styles.selectPicker}
                        selectedValue = {this.state.workTime} 
                        onValueChange = {this.updateWorkTime}>
                            <Picker.Item label = "Toàn thời gian" value = "Toàn thời gian" />
                            <Picker.Item label = "Bán thời gian" value = "Bán thời gian" />
                        </Picker>
                    </View>
                    <FloatingLabelInput label="Số điện thoại"
                    value={this.state.account} onChangeText={this.handleTextChange}
                    />
                    <View style={styles.ViewSelectPicker}>
                        <Text style={styles.TitleSelectPicker}>Giới tính</Text>
                        <Picker style={styles.selectPicker}
                        selectedValue = {this.state.user} 
                        onValueChange = {this.updateUser}>
                            <Picker.Item label = "Nam" value = "Nam" />
                            <Picker.Item label = "Nữ" value = "Nữ" />
                        </Picker>
                    </View>
                    <View style={styles.ViewSelectPicker}>
                        <Text style={styles.TitleSelectPicker}>Ngày sinh</Text>
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
                </View>
                
            </ScrollView>
                </View>
                <View style={styles.ViewLogo}>                   
                    <View style={styles.ShiftOffRules}>
                        <View style={styles.FromDayoffView}>
                           <Button title="Quay lại" onPress={()=> goBack()}/>
                        </View>
                        <View style={styles.FromDayoffView}>
                            <Button title="Hoàn thành" onPress={()=>{}}/>
                        </View>
                </View>           
                </View>
            </View>
        );
    }
    show(){
        ImagePicker.showImagePicker(options, (response) => {
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
        
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        
            this.setState({
              avatarSource: source
            });
          }
        });
      }
}
var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
const styles = StyleSheet.create({
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
        alignItems: 'center',
        flex: 0.1
    },
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        
    },
    DatePickerText:{
        marginTop: 10,
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
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
    ViewFloating:{
        marginTop: 30,
    },
    ViewSelectPicker: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",     
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
    TouchImage:{
        backgroundColor: 'blue'
    },
    ShiftOffRules:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    FromDayoffView:{
        flex: 0.5,
        marginLeft: 10,
    },

})
