import {
    View,
    StyleSheet,
    ViewStyle,
    Text,
    Pressable,
} from "react-native";
import React, { FC, useContext } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { ImageStyle } from "react-native-fast-image";
import FastImage from "react-native-fast-image";
import AppFonts from "../../constants/fonts";
import { hp, wp } from "../../utils/dimension";

type Props = {
    viewStyle?: ViewStyle;
    btnStyle?: ViewStyle;
    imgStyle?: ImageStyle;
    rightPress?: ()=>void;
    btnTxt?:string;
    changeBtnCol?:boolean;
    btnWidth?:boolean;
    name?:string;
    imgProfile?:any;
    relation?:string;
    rightImage?:any;

};

const Participants: React.FC<Props> = ({ imgProfile,rightImage,viewStyle, imgStyle,rightPress,btnTxt,btnWidth,name,relation,changeBtnCol,btnStyle }) => {

    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;


    return (

        <View style={styles.edusty}>
            <View style={styles.subContain}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Pressable>
                        <FastImage
                            resizeMode='contain'
                            style={styles.imgSty1}
                            source={imgProfile?imgProfile:images.jenny2Icon}
                        />
                    </Pressable >

                    <View style={{ marginLeft: 10 }}>
                        <Text style={[styles.txtSty, ]}>{name}</Text>
                        <Text style={[styles.txtSty2, { color: colors.textGrey }]}>{relation}</Text>
                    </View>
                </View>

                {rightImage && <Pressable onPress={rightPress}>
                    <FastImage
                        resizeMode='contain'
                        source={rightImage?rightImage:images.fileIcon}
                        style={styles.imgSty2}
                    />
                </Pressable>}

                {btnTxt && (<Pressable style={[styles.btn,{backgroundColor:changeBtnCol?colors.redCol:colors.secendory},
                    {width:btnWidth?100:80},btnStyle
                ]} onPress={rightPress}>
                    <Text style={styles.txtSty2}>{btnTxt}</Text>
                </Pressable>)}

                {/* <AppButton
                btnStyle={[styles.btn]}
                txtStyle={styles.txtSty2} 
                titleTxt={btnTxt?btnTxt:"Add"}
                /> */}


            </View>

        </View>

    );
};

export default Participants;

const useStyles = (colors: any) =>
    StyleSheet.create({
        topText: {
            fontSize: 16,
            fontFamily: AppFonts.Regular,
            paddingHorizontal: 15,
            color: colors.textBlack,
            textAlign: "left",
            alignSelf: "flex-start",

        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 30,
            backgroundColor: colors.secendory,
            width: "80%"
        },
        edusty: {
            width: "90%",
            borderRadius: 10,
            shadowColor: colors.shadowCol,
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { height: 0, width: 2 },
            elevation: 4,
            paddingHorizontal: 10,
            paddingVertical: 5,
            paddingBottom: 10,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop: 10,
            alignSelf:"center"
        },
        subContain: { flexDirection: "row", alignItems: "center", paddingHorizontal: 5, justifyContent: "space-between" },
        txtSty: {
            fontSize: 14,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack,
        },
        txtSty2: {
            fontSize: 12,
            textAlign: "left",
            fontFamily: AppFonts.Medium,
            color: colors.textWhite,
        },
        imgSty2: {
            height: hp(2.5),
            width: wp(4.9),
        },
        imgSty1: {
            height: hp(6),
            width: wp(12),
        },
        btn: {
            width: wp(19.5),
            height: hp(3.5),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
        }
    });
