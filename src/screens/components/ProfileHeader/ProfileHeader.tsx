import { View, Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { hp, wp } from '../../../utils/dimension';
import AppFonts from '../../../constants/fonts';
import FastImage, { ImageStyle } from 'react-native-fast-image';

interface ProfileHeaderProps {
    imgLeft?: any;
    imgRight?: any;
    imgCenter?: any;
    tittleOne?: string;
    viewStyle?: ViewStyle;
    imgsStyle?: ImageStyle;
    onRightPress?: () => void;
    onLeftPress?: () => void;
    tittleSecond?: string;
    tittleCenter?: string;
    textStyle?: TextStyle;
    textCenterStyle?: TextStyle;
    tittletTwo?: string;
    viewCenterSty?: ViewStyle,
    textRight?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    viewStyle,
    imgLeft,
    imgRight,
    imgCenter,
    tittleCenter,
    tittleOne,
    tittleSecond,
    onLeftPress,
    onRightPress,
    imgsStyle,
    textStyle,
    tittletTwo, textCenterStyle, viewCenterSty, textRight
}) => {
    const { colors, images } = useTheme() as any
    const styles = style(colors)
    return (
        <View style={[styles.container, viewStyle]}>

            <View style={styles.subContain }>

                {imgLeft && (<Pressable onPress={onLeftPress}>
                    <FastImage resizeMode='contain' style={styles.imgSty1} source={imgLeft} />
                </Pressable>)}

                <View style={{ alignItems: "center", justifyContent: "center", rowGap: 5 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 8 }}>
                        <Text style={[styles.txtSty, { color: colors.secendory, fontFamily: AppFonts.BoldItalic }]}> {"Welcome,"}</Text>
                        <Text style={[styles.txtSty, { fontFamily: AppFonts.Medium }]}> {"John Doe"}</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        {<FastImage resizeMode='contain' style={{ height: hp(4), width: wp(4) }} source={images.locationIcon} />}
                        <Text style={[styles.txtSty]}> {"Brooklyn, New York"}</Text>
                    </View>
                </View>

            </View>

            <Pressable onPress={onRightPress}>
                {imgRight && <FastImage resizeMode='contain' source={imgRight} style={styles.imgSty2} />}
                {textRight && <Text style={[styles.txtSty]}> {textRight}</Text>}
            </Pressable>

        </View>
    )
}
const style = (colors: any) => StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: 'row',
        // height: hp(8),
        paddingHorizontal: 15,
        paddingVertical:10,
        backgroundColor: "rgba(95,139,122,0.3)",//backgroundCol3
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    subContain: { flexDirection: "row", alignItems: "center", columnGap: 10 },
    txtSty: {
        fontSize: 14,
        textAlign: "left",
        fontFamily: AppFonts.Regular,
        color: colors.textBlack,
        fontWeight:'400'
    },
    imgSty2: {
        height: hp(6),
        width: wp(12),
    },
    imgSty1: {
        height: hp(6),
        width: wp(12),
    },
});

export default ProfileHeader