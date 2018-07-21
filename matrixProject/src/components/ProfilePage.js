import React,{Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import SideDrawer from './SideDrawer';

import FirstScreen1 from './drawerScreen/FirstScreen'
import SecondScreen2 from './drawerScreen/SecondScreen';
import { DrawerNavigator } from 'react-navigation';
import Icon from './icons/Comment';






class ProfilePage extends Component {

    // state={
    //     showSideDrawer:false
    // };
    // //
    // showSideDrawer =()=>{
    //     this.setState({showSideDrawer:!this.state.showSideDrawer})
    //     // this.props.navigation.openDrawer();
    // };

    render(){
        // let sideDrawer=null;
        // if(this.state.showSideDrawer) {
        //     sideDrawer=(
        //        <SideDrawer />
        //     )
        // }
        return (
            <AppDrawer/>



    )
    }

}
export default ProfilePage;

const AppDrawer = DrawerNavigator({
    FirstScreen : {
        screen:FirstScreen1,
        navigationOptions: () => ({
            title: `设置`,
            headerBackTitle: null,
            drawerIcon:'',

        }),

    },
    SecondScreen : {
        screen:SecondScreen2,
        navigationOptions: () => ({
            title: `检查更新`,
            headerBackTitle: null
        }),
    }},
    {initialRouteName: 'FirstScreen',}


);
