import { View, Text, StyleSheet, TextInput, ViewStyle } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

import FastImage from "react-native-fast-image";
import AppFonts from "../../../constants/fonts";
import { hp, wp } from "../../../utils/dimension";

interface SearchCompProps {
  mainContainer?:ViewStyle
  searchtxtInput?:ViewStyle
}

const SearchBarComp: React.FC<SearchCompProps> = ({
  mainContainer,
  searchtxtInput
}) => {
  const { colors, images } = useTheme() as any;
  const styles = style(colors) as any;
  return (
    <View style={[styles.mainContainer,{...mainContainer}]}>
     <View style={{borderRadius:8,backgroundColor:colors.secendory,height:40,width:40,alignItems:"center",justifyContent:"center"}}>
     <FastImage tintColor={colors.btngreen} source={images.searchIcon} style={styles.imgContainer} />
      </View> 
      <TextInput placeholderTextColor={colors.textBlack} placeholder="Search..." style={[styles.searchtxtInput,{...searchtxtInput}]}></TextInput>
    </View>
  );
};

export default SearchBarComp;
const style = (colors: any) =>
  StyleSheet.create({
    imgContainer: { height: 15, width: 16 },
    searchtxtInput: {
      color: colors.textBlack,
      fontSize: 14,
      fontFamily: AppFonts.Regular,
      textAlign:"left",
      marginLeft: 10,
      width:"100%",
      maxWidth:"90%",
    },
    mainContainer: {
      // height: hp(5.6),
      width: "90%",
      borderRadius: 10,
      backgroundColor: "rgba(95,139,122,0.02)",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 5,
      borderWidth:1,
      borderColor:"rgba(95,139,122,0.30)",
    },
  });
