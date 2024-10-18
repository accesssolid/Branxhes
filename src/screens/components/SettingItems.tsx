import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useTheme } from "@react-navigation/native";
  import FastImage from "react-native-fast-image";
  import AppFonts from "../../constants/fonts";
  
  const SettingsItems = ({ item, index }) => {
    const { colors, images } = useTheme();
    const styles = useStyles(colors);
  
    return (
      <>
        {item?.title && (
          <Text maxFontSizeMultiplier={2.4} style={styles.settingTextStyle}>
            {item?.title}
          </Text>
        )}
        <View style={{ width: "100%" }}>
          <TouchableOpacity style={styles.innerView} onPress={item?.onPress}>
            <Text maxFontSizeMultiplier={2.8} style={styles.title}>
              {item?.component}
            </Text>
            <FastImage source={images.rightArrow} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default SettingsItems;
  
  const useStyles = (colors) =>
    StyleSheet.create({
      innerView: {
        minHeight:60,
        width: "98%",
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        backgroundColor: "white",
        alignSelf: "center",
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      settingTextStyle: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: AppFonts.SemiBold,
        color: colors.black,
      },
      title: {
        width: "90%",
        textAlign: "left",
        fontSize: 16,
        fontFamily: AppFonts.Medium,
        color: "black"
      },
      rightArrow: {
        height: 15,
        width: 8,
        right: 10,
      },
    });
  