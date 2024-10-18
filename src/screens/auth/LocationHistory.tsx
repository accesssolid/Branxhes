import {
    View,
    Text,
    StyleSheet,
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import { hp, wp } from "../../utils/dimension";
import SolidInput from "../components/SolidInput";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type LocationHistoryProps = {
};

const LocationHistory: React.FC<LocationHistoryProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    // const inputHandler = (value: string) => {
    //     // setInputData(value);
    // }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="Location History"
                            textRight="2/3"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />

                        <KeyboardAwareScrollView
                            style={{ flex: 1 }}
                            scrollEnabled={true}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >

                            <View style={styles.mainContainer}>

                                <Text style={styles.topText}>Please share any cities or countries you've lived in and what brought you to each place.</Text>

                                <View style={styles.edusty}>

                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Country"
                                        tittleText="Country"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="City"
                                        tittleText="City"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <Text
                                        style={{ textAlign: "left", fontSize: 14, fontFamily: AppFonts.SemiBold, color: colors.textblack, marginLeft: 4, marginTop: 15 }}>
                                        {"About"}
                                    </Text>
                                    <TextInput placeholder="Write something about this country..." style={styles.txtInput}
                                        multiline
                                        numberOfLines={10}
                                        textAlignVertical="top"
                                        placeholderTextColor={colors.textBlack}
                                    // onChangeText={inputHandler}
                                    />


                                    <AppButton
                                        titleTxt="Add another"
                                        btnStyle={styles.btnSty}
                                        txtStyle={{ color: colors.textGreen }}
                                    />

                                </View>

                                <AppButton
                                    titleTxt="Continue"
                                    btnStyle={styles.btnSty2}
                                    onPress={() => navigation.navigate(AppRoutes.Bio)}
                                />

                            </View>
                        </KeyboardAwareScrollView>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default LocationHistory;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 20,
        },
        topText: {
            fontSize: 16,
            fontFamily: AppFonts.Regular,
            paddingHorizontal: 10,
            color: colors.textBlack,
            textAlign: "left",
        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 30,
            backgroundColor: colors.secendory,
            width: "80%"
        },
        btnSty: {
            marginBottom: 15,
            marginTop: 20,
            backgroundColor: colors.backgroundGreen,
            width: "50%",
            height: hp(4.8)
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
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop: 10
        },
        txtInput: {
            borderRadius: 10,
            backgroundColor: colors.greyCol,
            padding: 8,
            marginTop: 5,
            minHeight: 200,
            color: colors.textBlack
        }
    });
