import React, { useState } from "react";
import {
  Image,
  ImageStyle,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { hp } from "../../utils/dimension";
import AppFonts from "../../constants/fonts";
import FastImage from "react-native-fast-image";

interface SolidInputProps {
  viewStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  imgsStyle?: ViewStyle;
  imgsStyle2?: ImageStyle;
  placeholder?: string;
  leftImg?: any;
  rightImg?: any;
  isSecure?: boolean;
  tittleText?: string;
  onRightPress?: () => void;
  onLeftPress?: () => void;
  onChangeHandeler?: any;
  inputTextValue?: any;
  onFocusText?: any;
  onBlurText?: any;
  multiline?: boolean;
  keyBoradTypeChange?: any;
  isFocused?: boolean;
  maxLength?: any;
  subStyle?: ViewStyle;
  headTitle?: string;
  leftImgSec?: any;
  coinsDataRight?: string;
  routeKey?: any;
  firstTimeImg?: boolean;
  widthChange?: boolean;
}

const SolidInput: React.FC<SolidInputProps> = ({
  viewStyle,
  placeholder,
  textInputStyle,
  leftImg,
  rightImg,
  isSecure,
  imgsStyle,
  imgsStyle2,
  leftImgSec,
  onRightPress,
  onLeftPress,
  onChangeHandeler,
  inputTextValue,
  onFocusText,
  onBlurText,
  multiline,
  keyBoradTypeChange,
  tittleText,
  maxLength,
  subStyle,

}) => {
  const { colors } = useTheme();
  const styles = style(colors);

  return (
    <View style={[viewStyle]}>

      {tittleText && <Text style={styles.tittleTxtSty}>{tittleText}</Text>}

      <View style={[styles.subParent, subStyle]}>
        {leftImg && (
          <Pressable
            onPress={onLeftPress}
            style={{ flexDirection: "row", gap: 5 }}
          >
            <Image source={leftImg} style={[styles.imgStyle, imgsStyle2]} />
            <FastImage
              source={leftImgSec}
              resizeMode="contain"
              style={[styles.imgSty, imgsStyle2]}
            />
          </Pressable>
        )}

        <TextInput
          secureTextEntry={isSecure}
          maxLength={maxLength}
          placeholderTextColor={colors.textBlack}
          placeholder={placeholder}
          style={[styles.textInput, textInputStyle]}
          onFocus={onFocusText}
          onBlur={onBlurText}
          onChangeText={onChangeHandeler}
          value={inputTextValue}
          multiline={multiline}
          keyboardType={keyBoradTypeChange}
        />
        {rightImg && (
          <Pressable onPress={onRightPress}>
            <Image
              source={rightImg}
              resizeMode="contain"
              style={[styles.rightImgStyle, imgsStyle]}
            />
          </Pressable>
        )}
      </View>

    </View>
  );
};

const style = (colors) =>
  StyleSheet.create({
    subParent: {
      width: "90%",
      backgroundColor: colors.backgroundWhite,
      borderRadius: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      // shadowColor: colors.shadowCol,
      // shadowOpacity: 0.2,
      // shadowRadius: 2,
      // shadowOffset: { height: 1, width: 2 },
      // elevation: 4,
    },
    textInput: {
      flex: 1,
      color: colors.textBlack,
      textAlign: "left",
      height:hp(7),
      // marginVertical: Platform.OS == 'ios' ? hp(1.53) : ,
      fontSize: 16,
      fontFamily: AppFonts.Regular,
    },
    imgSty: {
      width: hp(1.2),
      height: hp(1.2),
      alignSelf: "center",
      marginRight: 10,
    },
    rightImgStyle: {
      width: hp(2),
      height: hp(2),
      resizeMode: "contain",
    },
    tittleTxtSty: {
      textAlign: "left",
      fontSize: 14,
      fontFamily: AppFonts.SemiBold,
      color: colors.textBlack,
      marginLeft: 6,
      marginBottom: 4
    }
  })

export default SolidInput;
