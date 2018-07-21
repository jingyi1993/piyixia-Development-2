import FirstScreen from './drawerScreen/FirstScreen';
import SecondScreen from './drawerScreen/SecondScreen';
import {DrawerNavigator} from "react-navigation";

const SideDrawer= DrawerNavigator({
    First: {
        screen: FirstScreen,
    },
    Second: {
        screen: SecondScreen,
    }
},
{
    initialRouteName: 'First',
        drawerPosition:'left'
},




);
export default SideDrawer;