import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Dimensions
} from 'react-native';
import SolidView from '../components/SolidView';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../constants/fonts';
import moment from 'moment';
import MainHeader from '../components/MainHeader/MainHeader';

export default function Notification() {
    const navigation = useNavigation();
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
    const [notificationData, setNotificationData] = useState([
        {
            id: 1,
            title: "New Message from John",
            description: "You have received a new message from John.",
            createdAt: moment().subtract(2, 'hours').toISOString(),
        },
        {
            id: 2,
            title: "Your Order is Ready",
            description: "Your order #1234 is ready for pickup.",
            createdAt: moment().subtract(1, 'days').toISOString(),
        },
        {
            id: 3,
            title: "System Update",
            description: "A new update is available for your system.",
            createdAt: moment().subtract(3, 'days').toISOString(),
        },
        {
            id: 4,
            title: "Event Reminder",
            description: "Don't forget your meeting at 4 PM tomorrow.",
            createdAt: moment().subtract(5, 'days').toISOString(),
        },
    ]);
    const window = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    };

    const RenderItem = ({ item, index }) => {
        return (
            <Pressable>
                <View
                    style={{
                        width: window.width * 0.90,
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginVertical: 10,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        padding: 10,
                        elevation: 1,
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                        <FastImage
                            resizeMode="contain"
                            style={styles.userImage}
                            source={images?.userimg}
                        />

                        <View style={{
                            width: window.width * 0.70,
                            marginLeft: 10,
                        }}>
                            <View style={styles.nameView}>
                                <Text style={styles.userName}>{item?.title}</Text>
                                <Text style={styles.timeTxt}>{moment(item?.createdAt).format('h:mm A')}</Text>
                            </View>
                            <Text style={styles.discriptionTxt}>{item?.description}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };

    const RenderView = ({ item, index }) => {
        const [showDelete, setShowDelete] = React.useState(false);
        return (
            <SwipeRow
                rightOpenValue={-60}
                disableRightSwipe={true}
                onRowOpen={() => {
                    setShowDelete(true);
                }}
                onRowClose={() => {
                    setShowDelete(false);
                }}>
                <TouchableOpacity
                    // onPress={() => deleteUserNotification(item?._id)}
                    style={[
                        styles.deleteview,
                        { backgroundColor: showDelete ? '#FF4A4A' : 'transparent' },
                    ]}>
                    {showDelete && (
                        <FastImage
                            resizeMode="contain"
                            source={images.delete}
                            style={styles.deleteImg}
                        />
                    )}
                </TouchableOpacity>
                <RenderItem item={item} index={index} />
            </SwipeRow>
        );
    };
    const [showPopOver, setShowPopOver] = useState(false)

    return (
        <SolidView
            linear
            view={
                <View style={styles.container}>
                    <MainHeader
                        rightIcon={images?.threedot}
                        tittleOne="Notification"
                        imgLeft={images.backCircleIcon}
                        onLeftPress={() => navigation.goBack()}
                        onPressRight={() => {
                            setShowPopOver(!showPopOver)
                        }}
                        isVisible={showPopOver}
                        onRequestClose={() => {
                            setShowPopOver(false);
                        }} />
                    <SwipeListView
                        bounces={true}
                        showsVerticalScrollIndicator={false}
                        data={notificationData}
                        contentContainerStyle={styles.containerView}
                        renderItem={({ item, index }) => (
                            <RenderView item={item} index={index} />
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        disableRightSwipe={true}
                        keyExtractor={(item, index) => index.toString()}
                        onSwipeValueChange={() => { }}

                    />
                </View>
            }
        />
    )
}

const useStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
    },
    nameView: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    deleteImg: {
        height: 30,
        width: 30
    },
    userName: {
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        color: colors?.notificationTitle,
        fontWeight: '700',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'flex-start'
    },
    timeTxt: {
        fontSize: 10,
        fontFamily: AppFonts.Italic,
        color: "#150000",
        marginRight: 10
    },
    discriptionTxt: {
        fontSize: 12,
        fontFamily: AppFonts.Light,
        color: colors?.text,
        fontWeight: '400'
    },
    deleteview: {
        alignSelf: 'flex-end',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        marginTop: 10
    },
    containerView: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
});
