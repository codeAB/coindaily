import React,{Component} from 'react'
import {View,Text,StatusBar,TextInput,TouchableOpacity,Image} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Tab4 from './tab4'
import Tabbar from '../utils/tabbar'
import style from '../utils/style'
import * as C from '../utils/common'
const tabIconNames = ["star-o","comments-o","user-o","user-o"];
const tabNames = ["项目","资讯","行情","我的"];
class Index extends Component {
    constructor() {
        super()
        console.log(this)
    } 
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <StatusBar barStyle="light-content" />
                <View style={{height:20,backgroundColor:style.theme.bcolor}} ></View>
                <View style={{height:50,backgroundColor:style.theme.bcolor,justifyContent:'space-between',alignItems  :'center',flexDirection:'row',paddingLeft:10,paddingRight:10}} >
                    <Image style={{width:30,height:30,borderRadius:15}} source={require('../images/logo.png')} />
                    <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>每日币读</Text>
                    <Icon
                        onPress={()=>{this.login()}}
                        name={'ios-search'}
                        size={30}
                        color={'#fff'}
                    />
                </View>
                <ScrollableTabView
                    ref = {(tabview)=>this.tabview = tabview}
                    locked={false}
                    tabBarPosition={'bottom'}
                    initialPage={0}
                    renderTabBar={() => <Tabbar tabNames={tabNames} tabIconNames={tabIconNames} />}
                    >
                    <Tab1 tabLabel="React1" />
                    <Tab2 tabLabel="React2" />
                    <Tab3 tabLabel="React3" />
                    <Tab4 tabLabel="React4" />
        
                </ScrollableTabView>
            </View>
        )
        
    }
}

const mapStateToProps = (state) => ({
    user:state.user
});
const mapDispatchToProps = (dispatch) => {
    return {
        logining: () => dispatch({type:"LOGIN"})
    }
}

export default IndexC = connect(mapStateToProps,mapDispatchToProps)(Index);

