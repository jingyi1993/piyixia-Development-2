import React,{Component} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import SideDrawer from './SideDrawer';
import SideMenu from 'react-native-side-menu';






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
            <View>
                <TouchableHighlight onPress={this.showSideDrawer}>
                <Text style={{width:'100%',
                    height:'30%',
                    backgroundColor:'grey'}}>
                    sideDrawer
                </Text>
                    {/*<SideDrawer show={this.state.showSideDrawer}/>*/}
                </TouchableHighlight>
                <View style={{ height:'10%',backgroundColor:'pink',
                    justifyContent:'space-between'
               }}>
                    {/*<View>{sideDrawer}</View>*/}

                    <Text>消息列表</Text>
                    <Text>清除全部</Text>

                </View>
                <Text style={{width:'100%', height:'30%'}}>infoList</Text>

            </View>
        )
    }

}
export default ProfilePage;

class Application extends React.Component {
    render() {
        const menu = <Menu navigator={navigator}/>;

        return (
            <SideMenu menu={menu}>
                <ContentView/>
            </SideMenu>
        );
    }
}
