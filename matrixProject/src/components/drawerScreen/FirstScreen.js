import React from 'react';
import  {Text, View , Button, Image, List, FlatList, ListItem} from 'react-native';
import {DrawerActions} from "react-navigation";
import { Header, Left, Icon} from 'native-base';



export default class FirstScreen extends React.Component {
    // static navigationOptions= {
    //     // title:'qqq',
    //     tabBarLabel:'screen 1',
    //     drawerIcon :()=>{
    //         return (
    //             <View>
    //                 <Text>设置</Text>
    //             </View>
    //         );
    //     }
    // };
    state={
        data:[{title: 'Title Text', key: 'item1'},
            {title: 'ma', key: 'item2'}]


    };

    _renderItem = ({item}) => (
        <View>
        <Text>
            {item.title}
        </Text>
        </View>

    );
    _keyExtractor = (item, index) => item.key;


    render(){
        return(
            <View>
                <Header>
                    <Left>
                        <Icon name='menu'
                              onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
                    </Left>
                </Header>
            <View style={{height:'30%'}}>
                <Text>头像</Text>
            </View>
            <View style={{height:'30%'}}>
            <Text>消息列表</Text>
    </View>
        <View style={{height:'30%'}}>

              <FlatList data={[{title: 'Title Text', key: 'item1'}, {title: 'ma', key: 'item2'}]}
              renderItem = {this._renderItem}
              keyExtractor={this._keyExtractor}/>


            </View>
                <Button onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        title="openDrawer Navigator"/>
            </View>

        )
    }
}