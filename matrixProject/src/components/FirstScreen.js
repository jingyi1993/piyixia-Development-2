import React from 'react';
import  {Text, View , Button, Image} from 'react-native';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel:'screen 1',
        drawerIcon :()=>{
            return (
                <View>
                    <Text>screen1</Text>
                </View>
            );
        }
    };

    render(){
        return(
            <View style={{
                flex:1,justifyContent:'center',alignItems:'center'
            }}>
                <Text style={{fontSize: 30, color: 'green'}}>screen 1</Text>

            </View>
        )
    }
}