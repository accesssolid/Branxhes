import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../screens/nonAuth/Home'
import AppRoutes from '../RouteKeys/appRoutes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { wp } from '../../utils/dimension'
import FastImage from 'react-native-fast-image'
import Tree from '../../screens/nonAuth/Tree'
import Chat from '../../screens/nonAuth/Chat'
import Profile from '../../screens/nonAuth/Profile'
import AppFonts from '../../constants/fonts'


const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);

    const Custom = ({ route }) => {
        return ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: Platform?.OS == "ios" ? 90 : 66,

            },
            tabBarIcon: (({ focused, color, size }) => {
                switch (route.name) {
                    case AppRoutes.Home: {
                        return (
                            <View
                                style={[styles.tab, focused && styles.selectedTab]}>
                                <FastImage
                                    source={images.dash} style={styles.tabIcons} resizeMode="contain" />
                                <Text style={styles.tabTitle}>Dashboard</Text>
                            </View>
                        )
                    }
                    case AppRoutes.Tree: {
                        return (
                            <View style={[styles.tab, focused && styles.selectedTab]}>
                                <FastImage
                                    source={images.tree} style={styles.tabIcons} resizeMode="contain" />
                                <Text style={styles.tabTitle}>Family Tree</Text>
                            </View>
                        )
                    }
                    case AppRoutes.Chat: {
                        return (
                            <View style={[styles.tab, focused && styles.selectedTab]}>
                                <FastImage
                                    source={images.chat} style={styles.tabIcons} resizeMode="contain" />
                                <Text style={styles.tabTitle}>Chat</Text>
                            </View>
                        )
                    }
                    case AppRoutes.Profile: {
                        return (
                            <View style={[styles.tab, focused && styles.selectedTab]}>
                                <FastImage
                                    source={images.profile} style={styles.tabIcons} resizeMode="contain" />
                                <Text style={styles.tabTitle}>Profile</Text>
                            </View>
                        )
                    }
                }
            })
        })
    }
    return (
        <Tab.Navigator
            screenOptions={Custom}
            initialRouteName={AppRoutes.Home}
        >
            <Tab.Screen listeners={({ navigation }) => ({
                tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate(AppRoutes.Home, { ingoreApiHit: false });
                },
            })} name={AppRoutes.Home} component={Home} />
            <Tab.Screen name={AppRoutes.Tree} component={Tree} />
            <Tab.Screen name={AppRoutes.Chat} component={Chat} />
            <Tab.Screen name={AppRoutes.Profile} component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTab

const useStyles = (colors) => StyleSheet.create({
    tabIcons: {
        height: 24,
        width: 24,
    },
    tabTitle: {
        fontFamily: AppFonts?.Medium,
        fontSize: 10,
        fontWeight: '400',
        marginTop: 8,
        color: colors?.text
    },
    img: {
        height: 20, width: 20, resizeMode: "contain", marginTop: 4
    },
    tab: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: wp(20),
        opacity: 0.4
    },
    selectedTab: {
        opacity: 1
    }
})