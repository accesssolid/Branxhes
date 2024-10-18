import {
    View,
    StyleSheet,
    ViewStyle,
    Pressable,
    Text,
  } from "react-native";
  import React, { FC, useContext } from "react";
  import { useNavigation, useTheme } from "@react-navigation/native";
import {ImageStyle} from "react-native-fast-image";
import FastImage from "react-native-fast-image";
import { hp, wp } from "../../utils/dimension";
  
  type Props= {
    viewStyle?:ViewStyle;
    imgStyle?:ImageStyle;
    onpress?:()=>void;
  };
  
  const ImageUpload: React.FC<Props> = ({viewStyle,imgStyle,onpress})=>{
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;

    return (
        <View style={[styles.addProfile,]}>
        <Pressable style={[styles.addProPic,viewStyle]} onPress={onpress} >
            <FastImage source={images?.uploadIcon} resizeMode="contain" style={[{ height: hp(3.75), width: wp(7.35) },imgStyle]} />
            <Text style={[styles.termsSty, { color: colors.textBlack2 }]}>Add Profile Picture</Text>
        </Pressable>
    </View>
    );
  };
  
  export default ImageUpload;
  
  const useStyles = (colors: any) =>
    StyleSheet.create({
          addProfile: {
            justifyContent: "center", alignItems: "center", rowGap: 5, marginTop: 20, marginBottom: 10
        },
        addProPic: {
            height: hp(11.5), width: "100%", borderRadius: 15, borderWidth: 1.5, borderColor: colors.secendory,
            borderStyle: "dashed", justifyContent: "center", alignItems: "center", backgroundColor: colors.backgroundGreen,
        },
    });
  