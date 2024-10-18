import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ViewStyle,
    TextStyle,
  } from "react-native";
  import React, { useContext } from "react";
  import { useTheme } from "@react-navigation/native";
  import FastImage from "react-native-fast-image";
  import { LocalizationContext } from "../../localization/localization";
  import { hp, wp } from "../../utils/dimension";
  import AppFonts from "../../constants/fonts";
  
  interface SocialBtnProps {
    btnStyle?: ViewStyle;
    txtStyle?: TextStyle;
    borderStyle?: ViewStyle;
    titleTxt: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    img?: any;
    imgTintColor?: any;
    gradientColors?: string[];
    height?: number;
    width?: number;
    imgStyle?: ViewStyle;
    tintColor?: any;
  }
  
  const ComonButton: React.FC<SocialBtnProps> = ({
    btnStyle,
    txtStyle,
    titleTxt,
    onPress,
    isLoading,
    disabled = false,
    img,
    imgTintColor,
    gradientColors,
    borderStyle,
    height,
    width,
    imgStyle,
    tintColor,
  }) => {
    const { colors, images } = useTheme() as any;
    const styles = style(colors);
    const { localization } = useContext(LocalizationContext) as any;
    return (
    //   <View style={styles.parent}>
  
        <Pressable
          style={[styles.btnContainer, btnStyle, borderStyle]}
          onPress={onPress}
        >
          <View style={[styles.imgContain, imgStyle]}>
            <FastImage
              tintColor={tintColor}
              resizeMode="contain"
              source={img}
              style={[styles.imageStyle, imgTintColor, height, width]}
            />
          </View>
          <Text style={[styles.butTxtStyle, txtStyle]}>{titleTxt}</Text>
        </Pressable>
  
     
    //   </View>
    );
  };
  
  const style = (colors: any) =>
    StyleSheet.create({
      parent: {
        // width: "100%",
        alignItems: "center",
      },
      btnContainer: {
        height: 50,
        width: wp(40),
        borderRadius: 30,
        backgroundColor: colors.background,
        borderWidth: 1.5,
        borderColor:"rgba(95,139,122,0.20)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: hp(1),
      },
      imgContain: {
        height: hp(5),
        width: hp(5),
        justifyContent: "center",
        alignItems: "center",
      },
      imageStyle: {
        resizeMode: "contain",
        height: 24,
        width: 24,
      },
      butTxtStyle: {
        fontSize: 15,
        color: colors.textBlack,
        fontFamily:AppFonts.Medium,
      },
    });
  
  export default ComonButton;
  