import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import {
    View,
    Text,
    Modal,
    Button,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Alert,
    ViewStyle,
    TextStyle,
} from "react-native";
import FastImage, { ImageStyle } from 'react-native-fast-image';
import AppButton from "./AppButton";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import { hp, wp } from "../../utils/dimension";
import { BlurView } from "@react-native-community/blur";


interface ComonModalProps {
    isVisible?: boolean;
    onClose?: () => void;
    onNext?: () => void;
    onNext2?: () => void;
    imgIcon?: any;
    textFirst?: string;
    textSecond?: string;
    tittleBtnOne?: string;
    tittleBtnTwo?: string;
    btnSty?: ViewStyle;
    viewSty?: ViewStyle;
    imgSty?: ImageStyle;
    textSty?: TextStyle;
    imgIconStyle?: ViewStyle;
}

const ComonModel2: React.FC<ComonModalProps> = ({
    imgIconStyle,
    isVisible,
    imgIcon,
    onClose,
    onNext,
    onNext2,
    textFirst,
    textSecond,
    tittleBtnOne,
    tittleBtnTwo,
    textSty,
    viewSty,
}) => {
    const { colors, images } = useTheme() as any;
    const { localization } = useContext(LocalizationContext) as any;
    const styles = createStyles(colors);
    if (!isVisible) return null;

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="fade"
            onRequestClose={onClose}
        >
                 <BlurView
                style={styles.modalContainer}
                blurType="light"  // Adjust this for the type of blur ("light", "dark", "xlight")
                blurAmount={3}    // Adjust the amount of blur
                reducedTransparencyFallbackColor="white"
            >
            <View style={styles.modalContainer}>

                <View style={[styles.modelContent, viewSty]}>

                    <FastImage
                        source={imgIcon}
                        resizeMode="contain"
                        style={[styles.imgStyle, imgIconStyle]}
                    />

                    {textFirst && <Text style={[styles.txtStyle]}>{textFirst}</Text>}
                   {textSecond && <Text style={[styles.txtStyle2, textSty]}>{textSecond}</Text>}

                     
                        <AppButton titleTxt={tittleBtnOne} onPress={onNext} btnStyle={{ marginBottom: 15 }} />
                   
                    {tittleBtnTwo && <AppButton
                        titleTxt={tittleBtnTwo ? tittleBtnTwo : localization.appkeys?.continue}
                        btnStyle={{backgroundColor:colors.backgroundGreen,marginBottom:5}}
                        txtStyle={{color:colors.textGreen}}
                        onPress={onNext2}
                    />}
                </View>

            </View>
            </BlurView>

        </Modal>

    );
};

export default ComonModel2;

const createStyles = (colors: any) =>
    StyleSheet.create({
        modalContainer: {
            flex: 1,
            width: "100%",
            backgroundColor: "rgba(36, 34, 34, 0.7)",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
        },
        modelContent: {
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 11,
            width: "90%",
            paddingBottom:10,
        },
        txtStyle: {
            textAlign: "center",
            fontSize: 22,
            color: colors.textBlack,
            fontFamily: AppFonts.SemiBold,
            marginTop: hp(1.5),
            paddingHorizontal: 25,
        },
        txtStyle2: {
            textAlign: "center",
            fontSize:16,
            color: colors.textBlack,
            fontFamily: AppFonts.Regular,
            marginTop: hp(1),
            paddingHorizontal: 20,
            marginBottom: hp(2.5),
        },
        imgStyle: {
            height: hp(10),
            width: wp(20),
            marginTop:hp(3),
        },
    });