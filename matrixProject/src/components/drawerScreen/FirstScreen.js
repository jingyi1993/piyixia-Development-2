import React from 'react';
import  {Text, View , Button, Image, List, FlatList, ListItem,StyleSheet} from 'react-native';
import {DrawerActions} from "react-navigation";
import { Header, Left, Icon, Right} from 'native-base';



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
        data:[{title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},
            {title: '您已经赞助挑战您已经赞助挑战您已经赞助挑战您已经赞助挑战您已经赞助挑战您已经赞助挑战您已经赞助挑战', key: 'item2', time:'2018-10-24'},
            {title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},
            {title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},
            {title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},
            {title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},
            {title: '消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容', key: 'item1', time:'2018-10-24'},],



    };

    _renderItem = ({item}) => (
        <View >
        <Text style={styles.bubble}>
            {item.title}
        </Text>
            <Text style={styles.time}>
                {item.time}
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
            <View style={{height:'20%'}}>
                <Text>头像</Text>
            </View>
            <View style={styles.List} >
                <Left style={{ display:'flex',
                    flexDirection: 'row',}}>
                <Icon name='chatboxes' style={{width: '10%'}}/>
            <Text style={{width: '40%'}}>消息列表</Text>
                </Left>

                 <Right style={{ display:'flex',
                     flexDirection: 'row',}}>
                <Text style={{width: '40%'}}>删除全部</Text>
                <Icon name='pint' style={{width: '10%'}}/>
               </Right>
           </View>
        <View style={styles.container}>
            <View >
              <FlatList data={this.state.data}
              renderItem = {this._renderItem}
              keyExtractor={this._keyExtractor}/>
            </View>


            </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    bubble: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        borderRadius: 6,

    },
    time: {
        textAlign: 'right',
        color: '#bababa',
        fontSize: 12,
    },
    List:{
        height: '5%',
        borderBottomWidth :1 ,
        borderBottomColor: '#000',
        marginBottom: 8,
        paddingBottom:1,
        display:'flex',
        flexDirection: 'row',

    }

})