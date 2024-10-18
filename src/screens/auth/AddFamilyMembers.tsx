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
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import FastImage from "react-native-fast-image";
import SolidInput from "../components/SolidInput";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import DorpdownComp from "../components/DropdownComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type AddFamilyMembers = {
};

const AddFamilyMembers: React.FC<AddFamilyMembers> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    // const inputHandler = (value: string) => {
    //     // setInputData(value);
    // }
    const dataList2 = [
        { detailSelectText: "Father" },
        { detailSelectText: "Brother" },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="Add Family Members"
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


                                    <DorpdownComp
                                        dataList={dataList2}
                                        mainTittle={"Father"}
                                        headTitle='Select Role'
                                        viewStyle={{ marginTop: 10, alignSelf: "center", backgroundColor: colors.greyCol }}
                                    />

                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Father"
                                        tittleText="Select Role"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />

                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="John Doe"
                                        tittleText="Name"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Johndoe911@gmail.com"
                                        tittleText="Email Address"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="+1 123 456 7890"
                                        tittleText="Phone Number"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10, marginTop: 15 }}>
                                        <FastImage source={images.tikCircleIcon} resizeMode="contain" style={{ height: 25, width: 25 }} />
                                        <Text style={styles.decTxt}>Deceased</Text>
                                    </View>
                                    <View style={styles.addProfile}>
                                        <Pressable style={styles.addProPic} >
                                            <FastImage source={images?.uploadIcon} resizeMode="contain" style={{ height: hp(3.75), width: wp(7.35) }} />
                                            <Text style={[styles.termsSty, { color: colors.textBlack2 }]}>Add Profile Picture</Text>
                                        </Pressable>

                                    </View>

                                </View>
                                <View style={styles.edusty}>

                                    <DorpdownComp
                                        dataList={dataList2}
                                        mainTittle={"Mother"}
                                        headTitle='Select Role'
                                        viewStyle={{ marginTop: 10, alignSelf: "center", backgroundColor: colors.greyCol }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Jeena Doe"
                                        tittleText="Name"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <SolidInput
                                        placeholder="Johndoe911"
                                        tittleText="Username"
                                        viewStyle={{ marginTop: 20 }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Johndoe911@gmail.com"
                                        tittleText="Email Address"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="+1 123 456 7890"
                                        tittleText="Phone Number"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10, marginTop: 15 }}>
                                        <FastImage source={images.tikCircleIcon} resizeMode="contain" style={{ height: 25, width: 25 }} />
                                        <Text style={styles.decTxt}>Deceased</Text>
                                    </View>
                                    <View style={styles.addProfile}>
                                        <Pressable style={styles.addProPic} >
                                            <FastImage source={images?.uploadIcon} resizeMode="contain" style={{ height: hp(3.75), width: wp(7.35) }} />
                                            <Text style={[styles.termsSty, { color: colors.textBlack2 }]}>Add Profile Picture</Text>
                                        </Pressable>
                                    </View>

                                    <AppButton
                                        titleTxt="Send Invite"
                                        // txtStyle={{ color: colors.textGreen }}
                                        btnStyle={styles.btnSty2}
                                    />

                                </View>


                                <AppButton
                                    titleTxt="Add another"
                                    btnStyle={styles.btnSty}
                                    txtStyle={{ color: colors.textGreen }}
                                />

                                <AppButton
                                    titleTxt="Continue"
                                    btnStyle={styles.btnSty2}
                                    onPress={() => navigation.navigate(AppRoutes.Subscription)}
                                />

                            </View>
                        </KeyboardAwareScrollView>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default AddFamilyMembers;

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
            color: colors.textBlack1,
            textAlign: "left",
        },
        decTxt: {
            fontSize: 14,
            fontFamily: AppFonts.SemiBold,
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
            marginTop: 30,
            width: "80%",
            backgroundColor: colors.backgroundGreen,
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
        },
        addProfile: {
            justifyContent: "center", alignItems: "center", rowGap: 5, marginTop: 20, marginBottom: 10
        },
        addProPic: {
            height: hp(11.5), width: "100%", borderRadius: 15, borderWidth: 1.5, borderColor: colors.secendory,
            borderStyle: "dashed", justifyContent: "center", alignItems: "center", backgroundColor: colors.backgroundGreen,
        },
    });
