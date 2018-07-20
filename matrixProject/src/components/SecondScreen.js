import React from 'react';
import  {Text, View , Button, Image} from 'react-native';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel:'screen 2',
        drawerIcon :()=>{
            return (
                <View>
                    <Text>screen2</Text>
                </View>
            );
        }
    };

    render(){
        return(
            <View style={{
                flex:1,justifyContent:'center',alignItems:'center'
            }}>
                <Text style={{fontSize: 30, color: 'green'}}>screen 2</Text>
                <Button onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                        title="openDrawer Navigator"/>
            </View>
        )
    }
}