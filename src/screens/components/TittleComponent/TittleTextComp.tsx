import { View, Text, StyleSheet, ViewStyle, TextStyle, Pressable, Alert } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import AppFonts from '../../../constants/fonts';
import { hp } from '../../../utils/dimension';
import FastImage,{ImageStyle} from 'react-native-fast-image';

interface TittleTexTProps {
    tittleOne?: string;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    textStyle2?: TextStyle;
    rightIcon?: boolean;
    imgSty?:ImageStyle;
    rightPress?:()=>void;
    onPress?:()=>void;
    tittleTwo?:string;
}
const TittleTextComp: React.FC<TittleTexTProps> = ({
    tittleOne, viewStyle, textStyle,rightIcon,imgSty,rightPress,onPress,tittleTwo,textStyle2

}) => {
    const { colors, images } = useTheme() as any
    const styles = style(colors)
    return (
    <View style={[ { paddingHorizontal: hp(3), flexDirection: "row", width: "100%", justifyContent: "space-between",alignItems:"center"},viewStyle]}>
        {tittleOne && <Text onPress={onPress} style={[styles.textsty, textStyle]}>{tittleOne}</Text>}
 
       {rightIcon || tittleTwo && <Pressable onPress={rightPress}>
           {rightIcon && <FastImage source={images.questionIcon} resizeMode='contain' style={[{ height: hp(3), width: hp(3)},imgSty]} />}
            {tittleTwo && <Text onPress={onPress} style={[styles.textsty2, textStyle2]}>{tittleTwo}</Text>}
        </Pressable>}

    </View>

    )
}
const style = (colors: any) => StyleSheet.create({
    textsty: {
        fontSize:16,
        textAlign: "left",
        fontFamily: AppFonts.SemiBold,
        color: colors.textBlack3,
    }, 
       textsty2: {
        fontSize:12,
        textAlign: "left",
        fontFamily: AppFonts.Regular,
        color: colors.textBlack3,
    }
})

export default TittleTextComp