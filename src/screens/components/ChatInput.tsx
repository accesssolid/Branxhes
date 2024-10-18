import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp, wp } from "../../utils/dimension";
import AppFonts from "../../constants/fonts";
import { useNavigation, useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";

const ChatInput = (props) => {
  const { colors, images } = useTheme();
  const styles = UseStyles(colors);
  const navigation = useNavigation()

  return (
    <View style={[styles.mainContainer]}>
      <View style={styles.topView}>
        <TextInput
          value={props.val}
          onChangeText={props.onChangeText}
          style={styles.textinputStyle}
          placeholder={"Message..."}
          placeholderTextColor={colors.text}
          multiline={true}
        />
        <FastImage
          source={images.attach}
          style={styles.send}
          resizeMode="contain"
        />
      </View>
      <View style={styles.sendButtonView}>
        <TouchableOpacity onPress={props.onPressSend}>
          <FastImage
            source={images.send}
            style={styles.sendImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;

const UseStyles = (colors) => StyleSheet.create({
  mainContainer: {
    // height: hp(7),
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  sendImg: {
    height: hp(5.2),
    width: hp(5.2)
  },
  textinputStyle: {
    width: wp(70),
    height: "100%",
    fontFamily: AppFonts.Regular,
    fontSize: 12,
    color: colors.text,
    paddingTop: Platform?.OS == "ios" ? 20 : 10,
    fontWeight: '400'
  },
  sendButtonView: {
    // width: Platform?.OS == "ios" ? wp(21) : wp(24),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors?.chatContainer,
    borderWidth: 1.5,
    borderColor: "rgba(95, 139, 122, 0.3)",
    borderRadius: 35,
    paddingHorizontal: 10,
    height: hp(6),
  },
  send: {
    height: hp(3),
    width: hp(3)
  },
});
