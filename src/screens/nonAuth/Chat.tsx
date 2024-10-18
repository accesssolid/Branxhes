import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Dimensions,
    FlatList,
} from 'react-native';
import SolidView from '../components/SolidView';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../constants/fonts';
import MainHeader from '../components/MainHeader/MainHeader';
import AppRoutes from '../../routes/RouteKeys/appRoutes';

export default function Chat() {
    const navigation: any = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);

    const [notificationData, setNotificationData] = useState([
        {
            id: 1,
            title: "Family Group 1",
            description: "Lorem ipsum dolor sit amet consectetur. Quam aliquet consequat lorem...",
            createdAt: "10:20 am",
            unreadCount: 2,
            image: images?.group1
        },
        {
            id: 2,
            title: "Group 2",
            description: "Lorem ipsum dolor sit amet consectetur. Quam aliquet consequat lorem...",
            createdAt: "4h ago",
            image: images?.group2
        },
        {
            id: 3,
            title: "Group 3",
            description: "Lorem ipsum dolor sit amet consectetur. Quam aliquet consequat lorem...",
            createdAt: "7h ago",
            unreadCount: 4,
            image: images?.group3
        },
        {
            id: 4,
            title: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur. Quam aliquet consequat lorem...",
            createdAt: "10h ago",
            image: images?.group4
        },
    ]);

    const window = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    };

    const RenderItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => {
                    navigation.navigate(AppRoutes?.InnerChat, {
                        title: item?.title
                    })
                }}
            >
                <View
                    style={[styles.topView, {
                        width: window.width * 0.90,
                    }]}>
                    <View style={styles.detailView}>
                        <FastImage
                            resizeMode="contain"
                            style={styles.userImage}
                            source={item?.image}
                        />
                        <View style={{ width: window.width * 0.68, marginLeft: 10 }}>
                            <View style={styles.nameView}>
                                <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
                                    {item?.title}
                                </Text>
                                <Text style={styles.timeTxt}>{item?.createdAt}</Text>
                            </View>
                            <View style={styles.discriptionView}>
                                <View style={{
                                    width: window.width * 0.58
                                }}>
                                    <Text
                                        numberOfLines={1} ellipsizeMode="tail"
                                        style={styles.discriptionTxt}>{item?.description}</Text>
                                </View>
                                {
                                    item?.unreadCount &&
                                    <View style={styles.unreadView}>
                                        <Text style={styles.unreadTxt}>{item?.unreadCount}</Text>
                                    </View>
                                }

                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };

    return (
        <SolidView
            linear
            view={
                <View style={styles.container}>
                    <MainHeader tittleOne="Chat" />
                    <FlatList
                        data={notificationData}
                        renderItem={({ item }) => <RenderItem item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.containerView}
                    />
                </View>
            }
        />
    );
}

const useStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        backgroundColor: colors?.background,
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        opacity:0.8
    },
    unreadView: {
        backgroundColor: colors?.secendory,
        height: 18,
        width: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    detailView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center', // Ensures proper alignment between title and time
    },
    discriptionView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    unreadTxt: {
        fontSize: 10,
        fontWeight: '400',
        color: colors?.backgroundWhite,
    },
    userName: {
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        color: colors?.notificationTitle,
        fontWeight: '700',
        flexShrink: 1, // Allows title to shrink and prevent pushing createdAt out
    },
    timeTxt: {
        fontSize: 10,
        fontFamily: AppFonts.SemiBoldItalic,
        fontWeight: "500",
        color: colors?.shadowCol,
        marginLeft: 10,
        alignSelf: 'flex-start', // Ensures time remains aligned to top
    },
    discriptionTxt: {
        fontSize: 12,
        fontFamily: AppFonts.Light,
        color: colors?.text,
        fontWeight: '400',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    containerView: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
