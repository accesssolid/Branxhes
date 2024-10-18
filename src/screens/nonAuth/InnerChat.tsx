import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import ChatInput from '../components/ChatInput';
import ChatContainer from '../components/ChatContainer';
import SolidView from '../components/SolidView';
import MainHeader from '../components/MainHeader/MainHeader';


const InnerChat = ({ navigation, route }) => {
    const title = route?.params?.title
    const user = { _id: 1, name: "John Doe", profilePic: "https://example.com/profile.jpg" }; // Sample user data
    const otherUser = { _id: 2, name: "Jane Smith", profilePic: "https://example.com/otherprofile.jpg" }; // Sample other user data

    const { colors, images } = useTheme();
    const styles = UseStyles(colors);

    const [message, setMessage] = useState("");
    const [pickerModal, setPickerModal] = useState(false);
    const [pickType, setPickType] = useState("photo");

    // Static array of messages
    const [allMessages, setAllMessages] = useState([
        { _id: 1, text: "Hello!", createdAt: new Date('2024-10-15T09:00:00'), user: otherUser, type: "text" },
        { _id: 2, text: "Hi, how are you?", createdAt: new Date('2023-10-15T09:02:00'), user: user, type: "text" },
        { _id: 3, text: "I'm doing great, thanks!", createdAt: new Date('2024-10-15T09:05:00'), user: otherUser, type: "text" }
    ]);


    // Render chat messages
    const renderItem = ({ item, index }) => {
        return <ChatContainer item={item} index={index} />;
    };

    return (
        <SolidView
            linear
            view={
                <SafeAreaView style={{ flex: 1 }}>
                    <MainHeader tittleOne={title ? title : "John Doe"}
                        imgLeft={images.backCircleIcon}
                        onLeftPress={() => navigation.goBack()} />

                    <FlatList
                        data={allMessages}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id.toString()}
                        inverted
                    />
                    <ChatInput
                        value={message}
                        onSend={() => {
                            // Add a new message to the array (mock send functionality)
                            const newMessage = {
                                _id: allMessages.length + 1,
                                text: message,
                                createdAt: new Date(),
                                user: user,
                                type: "text"
                            };
                            setAllMessages([newMessage, ...allMessages]);
                            setMessage(""); // Clear input
                        }}
                        onChangeText={setMessage}
                    />
                </SafeAreaView>
            }
        />
    );
};
const UseStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    // Add other styles as needed
});

export default InnerChat;
