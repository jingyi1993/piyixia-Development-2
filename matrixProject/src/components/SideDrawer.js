import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
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