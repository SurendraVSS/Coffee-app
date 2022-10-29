import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import colors from "../config/colors";
import Main from "../../assets/coffees/main.png";
const CustomDrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>

                {/* Style the drawer here */}
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Image source={Main} style={{ width: 100, height: 100, alignSelf: "center", marginTop: 10, borderRadius: '50' }} />
                        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: colors.secondary, fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Surendra E</Text>
                            <Text style={{ color: colors.secondary, fontSize: 20, marginLeft: 10, marginTop: 10 }}>Enjoy Day with ☕️</Text>
                        </View>


                    </View>



                </View>
                <View style={{ marginTop: 40,height:550}}>


                    <Drawer.Section style={{  marginTop: 15,margin:20,flex:1 }}>
                        <DrawerItem style={{ backgroundColor: colors.darkLight, borderRadius: 10 }} label={() => (<Text style={{ fontSize: 20,textAlign:'center',color:'white' }}>Home</Text>)} onPress={() => props.navigation.navigate("Main")} />

                        {/* New Drawer Item */}
                        <DrawerItem style={{ backgroundColor: colors.darkLight,borderRadius:10 }} label={() => (<Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>About</Text>)} onPress={() => props.navigation.navigate("Main")} />
                        <View style={{
                            bottom:10,
                            position:'absolute',
                       
}}>
                            <DrawerItem style={{ backgroundColor: colors.darkLight, borderRadius: 10, width: 220 }} label={() => (<Text style={{ fontSize: 20, textAlign: 'center', color: 'white', justifyContent: 'center' }}>Logout</Text>)} onPress={() => props.navigation.navigate("Main")} />
                        </View>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawerContent