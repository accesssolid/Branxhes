import { View, Text, StyleSheet, TextInput, ViewStyle, Pressable, Platform } from "react-native";
import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";

import FastImage from "react-native-fast-image";
import AppFonts from "../../constants/fonts";
import { hp, wp } from "../../utils/dimension";
import { LocalizationContext } from "../../localization/localization";

interface SearchCompProps {
    mainContainer?: ViewStyle
    searchtxtInput?: ViewStyle
}

const ProfileFeed: React.FC<SearchCompProps> = ({
    mainContainer,
    searchtxtInput
}) => {
    const { colors, images } = useTheme() as any;
    const { localization } = useContext(LocalizationContext) as any;
    const styles = style(colors) as any;
    return (
        <View style={[styles.profile, { ...mainContainer }]}>

            <View style={styles.subContain}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                <Pressable >
                    <FastImage resizeMode='contain' style={styles.imgSty1} source={images.profileIcon} />
                </Pressable>

                <View style={{marginLeft:10,rowGap:3}}>
                    <Text style={styles.txtSty}> {"John Doe"}</Text>
                    <Text style={[styles.txtSty, {fontSize:10 }]}> {"08:12 AM "}
                        <Text style={[styles.txtSty, {fontSize:10,fontFamily:AppFonts.Medium }]}>| Sat - 27 Nov 2024</Text>
                    </Text>
                </View>

                </View>

                <Pressable >
                    <FastImage resizeMode='contain' source={images.fileIcon} style={styles.imgSty2} />
                </Pressable>

            </View>

            {<Text style={styles.topText}>"We build digital products. Lorem ipsum dolor sit ametconsectetur. Mauris eget proinc."</Text>}

            <FastImage source={images?.pageIcon} resizeMode="contain" style={{ height: hp(35.5), width:Platform.OS==="ios"?wp(83.25):wp(82), marginTop: 5,alignSelf:"center" }} />

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginBottom:10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                    <Pressable>
                        <FastImage source={images?.heartRedIcon} resizeMode="contain" style={{ height: 20, width: 20, marginVertical: 10 }} />
                    </Pressable>
                    <Text style={[styles.topText, { color: colors.textBlack }]}>9</Text>
                    <Text style={[styles.topText, { color: colors.textBlack }]}>likes</Text>
                </View>

                <Text style={[styles.topText, { color: colors.textBlack }]}>5<Text style={[styles.topText, { color: colors.textBlack }]}> Comments</Text></Text>
            </View>

            <View style={styles.likeShare}>

                <Pressable style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                    <FastImage source={images?.heartIcon} resizeMode="contain" style={{ height: 20, width: 20, marginVertical: 10 }} />
                    <Text style={[styles.topText, { fontFamily: AppFonts.Medium, color: "rgba(32,32,32,0.4)" }]}>Like</Text>
                </Pressable>

                <Pressable style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                    <FastImage source={images?.commentIcon} resizeMode="contain" style={{ height: 20, width: 20, marginVertical: 10 }} />
                    <Text style={[styles.topText, { fontFamily: AppFonts.Medium, color: "rgba(32,32,32,0.4)" }]}>Comments</Text>
                </Pressable>

                <Pressable style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                    <FastImage source={images?.shareIcon} resizeMode="contain" style={{ height: 20, width: 20, marginVertical: 10 }} />
                    <Text style={[styles.topText, { fontFamily: AppFonts.Medium, color: "rgba(32,32,32,0.4)" }]}>Share</Text>
                </Pressable>

            </View>


        </View>
    );
};

export default ProfileFeed;
const style = (colors: any) =>
    StyleSheet.create({
        profile: {
            width: "90%",
            borderRadius: 10,
            shadowColor: colors.shadowCol,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: { height: 1, width: 0 },
            elevation: 2,
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
        },
        topText: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            color: colors.textBlack2,
            textAlign: "left",
            marginVertical:hp(1),
        },
        likeShare: {
            width: "100%",
            borderRadius: 10,
            backgroundColor: colors.greyCol2,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginBottom:6
        },
        subContain: { flexDirection: "row", alignItems: "center",paddingHorizontal:5,justifyContent:"space-between" },
        txtSty: {
            fontSize: 14,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack,
        },
        imgSty2: {
            height: hp(2.5),
            width: wp(4.9),
        },
        imgSty1: {
            height: hp(6),
            width: wp(12),
        },

    });
