import {
    View,
    StyleSheet,
    ViewStyle,
  } from "react-native";
  import React, { FC, useContext } from "react";
  import { useNavigation, useTheme } from "@react-navigation/native";
import {ImageStyle} from "react-native-fast-image";
import FastImage from "react-native-fast-image";
  
  type Props= {
    viewStyle?:ViewStyle;
    imgStyle?:ImageStyle
  };
  
  const LogoComp: React.FC<Props> = ({viewStyle,imgStyle})=>{


    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;

    return (
        <View style={[styles.imgContain,viewStyle]}>
        <FastImage source={images.logo} resizeMode="contain" style={[styles.imgSty,imgStyle]} />
      </View>
    );
  };
  
  export default LogoComp;
  
  const useStyles = (colors: any) =>
    StyleSheet.create({
        imgSty: {
            height: 150,
            width: 150,
          },
          imgContain: {
            paddingVertical: 15,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.secendory1,
            borderRadius: 11,
            width: "90%",
          },
    });
  