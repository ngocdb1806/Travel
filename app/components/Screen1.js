import React, {Component} from 'react'
import {
    StackNavigator,
} from 'react-navigation';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    AsyncStorage,
    ImageBackground,
    TouchableOpacity,
    Animated,
    Button
}from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import DayOff from "./DayOff";
export default class Screen1 extends Component{
    
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.MainView}>
          <Text style={styles.wifi}><Icon name="ios-wifi" size={30} /> Đang kết nối mạng chấm công hợp lệ</Text>
            <FadeInView>
              <Text style={styles.TextInView}>Check in</Text>
            </FadeInView>
            <Button title="Xin nghỉ phép" onPress={() => navigate('DayOff') }/>
          </View>
        )
      }
    
}
const DayyOffPage = StackNavigator({
    DayOff: { screen: DayOff }
  });
class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  
    }
      
    startAnimation() {
        Animated.timing(this._animatedValue, {
          toValue: 100,
          duration: 500,
        }).start(() => {
          this.startAnimation();
        });
    }
    render() {  
        let { fadeAnim } = this.state;
        return (
        <Animated.View style={[styles.ViewEffect]}>
            {this.props.children}
        </Animated.View>
      );
    }
  }
  const styles = StyleSheet.create({
    wifi:{
        fontSize: 20,
        color: "black",
    },
    MainView:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    ViewEffect:{
        width: 250, 
        height: 250, 
        backgroundColor: 'powderblue',
        borderRadius: 250/2,
        transform:[
            {scale: 1.1}
        ],
        marginBottom: 50,
        marginTop: 50,
    },
    TextInView: {
        fontSize: 28, 
        textAlign: 'center', 
        lineHeight: 250
    },
});