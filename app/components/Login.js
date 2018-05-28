import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button,     
}from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import CheckBox from 'react-native-checkbox';
export default class Login extends React.Component{
    state = {
        email:'',
        passWord: '',
    };
    handleTextChange = (newText) => this.setState({email: newText});
    render() {
        const { navigate } = this.props.navigation;
        return(
            // <View></View>
            <ScrollView style={styles.MainViewForm}>
                <View style={styles.ViewLogo}>                   
                    <Image
                                    style={{width: 80, height: 80 }}
                                    source={require('../img/logo-wisky-blue.png')}
                        />                  
                </View>
                <View style={styles.ViewForm}>
                    <FloatingLabelInput label="Email hoặc tên đăng nhập"
                            value={this.state.email} onChangeText={this.handleTextChange}
                        /> 
                    <FloatingLabelInput label="Mật khẩu"
                            value={this.state.passWord} onChangeText={this.handleTextChange}
                        />
                    <View style={styles.ButtonView}>
                        <Button title="Đăng nhập" onPress={() => {}}/>           
                    </View>
                    <View style={styles.StatusView}>
                        <CheckBox label='Giữ trạng thái đăng nhập'/>                   
                    </View>
                    <Text style={styles.Remind}>Quên mật khẩu? Hoặc đăng ký tài khoản mới
                    </Text>
                </View>   
                         
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({

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
    ButtonView:{
        flex: 1,
        marginTop: 30,
        marginBottom: 20,
        
    },
    StatusView:{
        flex: 1,
        marginBottom: 20,
        alignItems:'center'
    },
    ContentsInColumn:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Remind:{
        fontSize: 15,
        color:'#0795db',
        fontStyle: 'italic'
    }

})
