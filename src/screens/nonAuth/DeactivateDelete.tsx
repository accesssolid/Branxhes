import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import { hp, wp } from "../../utils/dimension";
import MainHeader from "../components/MainHeader/MainHeader";
import FastImage from "react-native-fast-image";
import AppFonts from "../../constants/fonts";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import ComonModel2 from "../components/ComonModel2";

const DeactivateDelete: React.FC = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();

    const [state, setState] = useState({
        isDeactivateOpen: false,
        isDeleteOpen: false,
        modalVisible: false,
        actionType: null,
    });

    const toggleOption = (option: 'deactivate' | 'delete') => {
        setState({
            ...state,
            isDeactivateOpen: option === 'deactivate' ? !state.isDeactivateOpen : false,
            isDeleteOpen: option === 'delete' ? !state.isDeleteOpen : false,
        });
    };

    const handleContinuePress = () => {
        const actionType = state.isDeactivateOpen ? "deactivate" : state.isDeleteOpen ? "delete" : null;
        if (actionType) {
            setState({ ...state, actionType, modalVisible: true });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SolidView
                linear
                view={
                    <>
                        <MainHeader
                            tittleOne={localization.appkeys?.deleteDeactiveAcc}
                            imgLeft={images.backCircleIcon}
                            textRight=" "
                            onLeftPress={() => navigation.goBack()}
                        />

                        <View style={styles.mainContainer}>
                            <TittleTextComp tittleOne={localization.appkeys?.deleteDeactive} textStyle={styles.labelSty} />
                            <TittleTextComp tittleOne={localization.appkeys?.breakBranxhes} textStyle={styles.labelSty2} />

                            <View style={styles.edusty}>
                                <Pressable onPress={() => toggleOption('deactivate')} style={styles.optionRow}>
                                    <FastImage source={state.isDeactivateOpen ? images.checkTikIcon : images.tikCircleIcon} resizeMode="contain" style={styles.iconStyle} />
                                    <Text style={styles.beniftTxt}>{localization.appkeys?.deactive}</Text>
                                </Pressable>
                                <Text style={[styles.detailTxt, { color: colors.secendory }]}>
                                    {localization.appkeys?.deactiveTemp} <Text style={styles.detailTxt}>{localization.appkeys?.deactivateAcc}</Text>
                                </Text>
                                <View style={styles.separator} />

                                <Pressable onPress={() => toggleOption('delete')} style={styles.optionRow}>
                                    <FastImage source={state.isDeleteOpen ? images.checkTikIcon : images.tikCircleIcon} resizeMode="contain" style={styles.iconStyle} />
                                    <Text style={styles.beniftTxt}>{localization.appkeys?.delete}</Text>
                                </Pressable>
                                <Text style={[styles.detailTxt, { color: colors.secendory }]}>
                                    {localization.appkeys?.deletePerma} <Text style={styles.detailTxt}>{localization.appkeys?.deleteAcc}</Text>
                                </Text>
                            </View>

                            <AppButton
                                titleTxt="Continue"
                                btnStyle={{ position: "absolute", bottom: "20%" }}
                                onPress={handleContinuePress}
                            />

                            <ComonModel2
                                isVisible={state.modalVisible}
                                imgIcon={state.actionType === "delete" ? images.deleteIcon : images.removeIcon}
                                textFirst={state.actionType === "delete" ? "Delete Account" : "Deactivate Account"}
                                textSecond={state.actionType === "delete" ? "Are you sure you want to delete this Account?" : "Are you sure you want to deactivate this Account?"}
                                tittleBtnOne={state.actionType === "delete" ? "Delete" : "Deactivate"}
                                tittleBtnTwo="Cancel"
                                onNext={() => setState({ ...state, modalVisible: false })}
                                onNext2={() => setState({ ...state, modalVisible: false })}
                            />
                        </View>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default DeactivateDelete;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 20,
        },
        labelSty: {
            fontSize: 14,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.shadowCol,
            marginTop: 8,
            paddingLeft: 5,
        },
        labelSty2: {
            fontSize: 12,
            textAlign: "left",
            fontFamily: AppFonts.Regular,
            color: colors.textBlack,
            marginTop: 10,
            paddingLeft: 5,
        },
        edusty: {
            width: "90%",
            borderRadius: 15,
            shadowColor: "rgba(0,0,0,0.05)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowOffset: { height: 0, width: 1 },
            elevation: 2,
            paddingHorizontal: 10,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop: 15,
        },
        iconStyle: {
            height: hp(2.5),
            width: wp(5),
        },
        beniftTxt: {
            fontSize: 14,
            fontFamily: AppFonts.Medium,
            textAlign: "left",
            color: colors.shadowCol,
        },
        detailTxt: {
            fontSize: 12,
            fontFamily: AppFonts.Medium,
            textAlign: "left",
            color: colors.textBlack,
            marginTop: 10,
            marginBottom: 12,
        },
        optionRow: {
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 12,
        },
        separator: {
            borderBottomColor: colors.borderCol,
            borderBottomWidth: 2,
            marginBottom: 5,
        },
    });
