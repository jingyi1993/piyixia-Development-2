import React from 'react';
import {TabNavigator, StackNavigator, createDrawerNavigator} from 'react-navigation';
import HomePage from './components/HomePage';
import ChallengePage from './components/ChallengePage';
import ChallengeDetailPage from './components/ChallengeDetailPage';
import JoinedChallenge from "./components/JoinedChallenge";
import QuestionPage from './components/QuestionPage';
import StartPage from './components/StartPage';
import ScoreBoard from './components/ScoreBoard';
import CommentPage from './components/commentPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfilePage from './components/ProfilePage'

import FirstScreen from "./components/drawerScreen/FirstScreen";
import SecondScreen from './components/drawerScreen/SecondScreen';



const myButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
    </Icon.Button>
);
const Router = StackNavigator({
  start: {
     screen: StartPage,
     navigationOptions: () => ({
         title: `智力问答`,
         headerStyle:{ backgroundColor: 'white'},
         headerBackTitle: null
     }),
  },
  questionpage: {
     screen: QuestionPage,
     navigationOptions: () => ({
         title: `智力问答`,
         headerStyle:{ backgroundColor: 'white'},
         headerBackTitle: null
     }),
  },
  scoreboard: {
    screen: ScoreBoard,
    navigationOptions: () => ({
        title: '积分榜',
        headerStyle:{ backgroundColor: 'white'},
        headerBackTitle: null
    }),
  },

});

// const sideDrawer = createDrawerNavigator({
//     screen: SideDrawer
// });

// const profilePageStack = StackNavigator({
//     ProfilePage: {
//         screen: ProfilePage,
//         title:'ProfilePage',
//     },
//     // sideDrawerPage: {
//     //     screen: SideDrawer,
//     //     title: 'sideDrawer'
//     // }
// });
const ProfilePageStack = StackNavigator({
    ProfilePage:{
        screen:ProfilePage,
        title:'ProfilePage'
    },
    // FirstScreen:{
    //     screen:FirstScreen
    //
    // },
    // SecondScreen:{
    //     screen:SecondScreen
    // }
})
const ChallengePageStack = StackNavigator({

    ChallengePage:{
        screen: ChallengePage,
        navigationOptions:{
        title:'challengePage'
        }
    },
    ProfilePage: ProfilePageStack,
    ChallengeDetailPage: {
        screen: ChallengeDetailPage,
        title:'challengeDetailPage'
        //not exist???
    },

    JoinedChallenge: {
        screen: JoinedChallenge,
        title:'challengeJoinedPage'},

    commentPage:{
        screen: CommentPage,
        navigationOptions: () => ({
            title: 'Create',
            headerStyle:{ backgroundColor: 'white'},
            headerBackTitle: null,
            navigatorButtons:{myButton},
            //???给标题添加一个发送按钮；

        }),
    },



});


const Router2 = TabNavigator(
  {
    Router: Router,
    HomePage: HomePage,
    ChallengePage: ChallengePageStack,
  },

  {
      initialRouteName: 'HomePage',
      swipeEnabled: true,
      tabBarOptions: {
           tabBarVisible: false,
           style: {
               backgroundColor: 'transparent',
               position: 'absolute',
            }
   },
  },
);

export default Router2;
