import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { wp } from '../../utils/dimension';
import { useNavigation, useTheme } from '@react-navigation/native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../constants/fonts';

const currentUser = { _id: '1', name: 'Current User' };  // Static current user
const otherUser = { _id: '2', name: 'Other User' };  // Static other user

const ChatContainer = ({ item }) => {
    const { colors, images } = useTheme();
    const styles = UseStyles(colors);
    const navigation = useNavigation();

    const isMine = item?.user?._id === currentUser._id;
    const alignSelf = isMine ? "flex-end" : "flex-start";
    const createdAt = moment(item?.createdAt);

    if (item?.status === 0) { // item is deleted
        return null;
    }

    return (
        <View style={{ marginBottom: 16 }}>
            <Pressable
                style={[{ alignSelf }]}>
                {
                    item?.type === "image" ? (
                        <ImageComponent item={item} />
                    ) : item?.type === "video" ? (
                        <VideoComponent item={item} />
                    ) : (
                        <TextComponent item={item} isMine={isMine} />
                    )
                }
            </Pressable>
            <View style={[{ flexDirection: "row", alignItems: "center", marginTop: 8 }, isMine && { alignSelf }]}>
                <Text style={[styles.timeFont]}>{moment(createdAt).format("hh:mm a")}</Text>
            </View>
        </View>
    );
};

const ChatScreen = () => {
    const [allMessages, setAllMessages] = useState([
        { _id: 1, text: "Hello!", createdAt: new Date(), user: otherUser, type: "text" },
        { _id: 2, text: "Hi, how are you?", createdAt: new Date(), user: currentUser, type: "text" },
        { _id: 3, text: "I'm doing great, thanks! I'm doing great, thanks! I'm doing great, thanks! I'm doing great, thanks!", createdAt: new Date(), user: otherUser, type: "text" },
    ]);


    return (
        <View style={{ flex: 1, padding: 20 }}>
            {allMessages.map((item, index) => (
                <ChatContainer key={index} item={item} />
            ))}
        </View>
    );
};

export default ChatScreen;

const UseStyles = (colors) => StyleSheet.create({
    chatfont: {
        fontFamily: AppFonts.Regular,
        fontSize: 12,
        color: colors.text,
        fontWeight: "300"
    },
    chatItem: {
        padding: 10,
        borderRadius: 10,
        maxWidth: "90%",
        minWidth: 60,
        backgroundColor: colors?.chatBackground,
        // alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    timeFont: {
        fontFamily: AppFonts.SemiBoldItalic,
        fontSize: 10,
        color: colors.text,
        fontWeight: "500"
        // marginHorizontal: 4,
        // marginLeft: 8,
    },
});

const TextComponent = ({ item, isMine }) => {
    const { colors } = useTheme();
    const styles = UseStyles(colors);
    const borderStyle = isMine ? { borderTopRightRadius: 0, borderRadius: 5 } : { borderTopLeftRadius: 0, borderRadius: 5 };
    const alignSelf = isMine ? "flex-end" : "flex-start";
    return (
        <View
            style={[styles.chatItem, isMine && { backgroundColor: colors?.chatBackground, alignSelf }, borderStyle]}>
            <Text style={styles.chatfont}>{item?.text}</Text>
        </View>
    );
};

const ImageComponent = ({ item }) => {
    return (
        <View style={[{ marginHorizontal: 4 }]}>
            <FastImage source={{ uri: item?.media }} style={{ height: wp(46), width: wp(50), borderRadius: 10 }} />
        </View>
    );
};

const VideoComponent = ({ item }) => {
    return (
        <View style={[{ marginHorizontal: 4, backgroundColor: "#000", height: wp(46), width: wp(50), justifyContent: "center", alignItems: "center", borderRadius: 10 }]}>
            <FastImage source={{ uri: "https://example.com/play-icon.png" }} style={{ height: 60, width: 60, borderRadius: 10 }} />
            {/* Replace with actual video handling */}
        </View>
    );
};
