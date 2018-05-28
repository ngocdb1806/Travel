import React, {Component} from 'react'
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

export default class FloatingLabelInput extends Component{
    state = {
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
const styles = StyleSheet.create({
    InputOf:{
        height: 45, 
        fontSize: 18, 
        color: '#000', 
    },
    ViewFloating:{
        marginTop: 30,
    },
})

