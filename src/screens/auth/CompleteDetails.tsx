import {
    View,
    Text,
    StyleSheet,
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import LogoComp from "../components/logoComp";
import SocialAppButton from "../components/SocialAppButton";
import FooterComp from "../components/FooterComp/FooterComp";
import { hp, wp } from "../../utils/dimension";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import FastImage from "react-native-fast-image";
import SolidInput from "../components/SolidInput";
import ImagePickerModal from "../components/ImagePikerModal/ImagePickerModal";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type CompleteDetailsProps = {

};

const CompleteDetails: React.FC<CompleteDetailsProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);

    const handleLanguageSelect = (code: string) => {
        setSelectedLanguage(prev =>
            prev.includes(code) ? prev.filter(lang => lang !== code) : [...prev, code]
        );
    };
    const languages = [
        { name: "Adventure", code: "en" },
        { name: "Animals", code: "es" },
        { name: "Foreign culture", code: "fr" },
        { name: "Hitchiking", code: "hi" },
        { name: "Local food", code: "lf" },
        { name: "Making New Friends", code: "mf" },
        { name: "Outdoor activities", code: "oa" },
        { name: "Plant-based food", code: "pf" },
        { name: "Sports", code: "sp" },
        { name: "Video Games", code: "vg" },
        { name: "Yoga", code: "yg" },
        { name: "Other...", code: "ot" },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="Basic Details"
                            textRight="1/3"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />


                        <KeyboardAwareScrollView
                            style={{ flex: 1 }}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >

                            <View style={styles.mainContainer}>

                                <SolidInput
                                    viewStyle={{ marginTop: 0 }}
                                    placeholder="31 - 08 - 1995"
                                    tittleText="DOB"
                                />
                                <SolidInput
                                    placeholder="Coler-Goldwater Specialty Hospital,"
                                    tittleText="Type country"
                                    viewStyle={{ marginTop: 20 }}
                                />

                                <SolidInput
                                    viewStyle={{ marginTop: 20 }}
                                    placeholder="Type City"
                                    tittleText="City you born"
                                />

                                <TittleTextComp tittleOne="Education" textStyle={styles.labelSty} />

                                <View style={styles.edusty}>

                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="XYZ School"
                                        tittleText="Type Interests / Hobbies..."
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <View style={styles.inputSty}>

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, width: "52%" }}
                                            placeholder="2001"
                                            tittleText="From"
                                            subStyle={{ backgroundColor: colors.greyCol }} />

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, width: "52%" }}
                                            placeholder="2005"
                                            tittleText="To"
                                            subStyle={{ backgroundColor: colors.greyCol }}
                                        />
                                    </View>

                                    <AppButton
                                        titleTxt="Add another"
                                        btnStyle={styles.btnSty}
                                        txtStyle={{ color: colors.textGreen }}
                                    />

                                </View>

                                <TittleTextComp tittleOne="Work From" textStyle={styles.labelSty} />

                                <View style={styles.edusty}>

                                    <SolidInput
                                        viewStyle={{ marginTop: 10 }}
                                        placeholder="Project Manager"
                                        tittleText="Enter name"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <View style={styles.inputSty}>

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, width: "52%" }}
                                            placeholder="2020"
                                            tittleText="From"
                                            subStyle={{ backgroundColor: colors.greyCol }} />

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, width: "52%" }}
                                            placeholder="2024"
                                            tittleText="To"
                                            subStyle={{ backgroundColor: colors.greyCol }}
                                        />
                                    </View>

                                    <AppButton
                                        titleTxt="Add Another"
                                        btnStyle={styles.btnSty}
                                        txtStyle={{ color: colors.textGreen }}
                                    />

                                </View>

                                <TittleTextComp tittleOne="Work History" textStyle={styles.labelSty} />

                                <View style={styles.langContain}>
                                    {languages.map((lang) => (<Pressable key={lang.code} style={[styles.langContent, { backgroundColor: selectedLanguage.includes(lang.code) ? colors.secendory : colors.backgroundWhite }]}
                                        onPress={() => handleLanguageSelect(lang.code)} >
                                        <Text style={[styles.txtStyle, { color: selectedLanguage.includes(lang.code) ? colors.textWhite : colors.textBlack }]}>{lang.name}</Text>
                                    </Pressable>))}

                                </View>


                                <SolidInput
                                    viewStyle={{ marginTop: 20, marginBottom: 20 }}
                                    placeholder="Type Interests / Hobbies..."
                                    tittleText="Other"
                                />

                                <AppButton
                                    titleTxt="Continue"
                                    btnStyle={styles.btnSty2}
                                    onPress={() => navigation.navigate(AppRoutes.LocationHistory)}
                                />

                            </View>
                        </KeyboardAwareScrollView>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default CompleteDetails;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 25,
            paddingBottom: 20,
        },
        labelSty: {
            fontSize: 16,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack3,
            marginTop: 10,
            marginBottom: 10
        },
        topText: {
            fontSize: 16,
            fontFamily: AppFonts.Regular,
            marginTop: 5,
            color: colors.textBlack,
            textAlign: "left",
        },
        addProfile: {
            justifyContent: "center", alignItems: "center", rowGap: 5, marginTop: 20
        },
        addProPic: {
            height: hp(11.5), width: wp(25), borderRadius: 15, borderWidth: 1.5, borderColor: colors.secendory,
            borderStyle: "dashed", justifyContent: "center", alignItems: "center"
        },
        conText: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            color: colors.textBlack,
            textAlign: "left",
            marginBottom: 15
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
        inputSty: {
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
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
            marginBottom: 5
        },
        langContain: {
            flexDirection: "row",
            paddingHorizontal: 5, width: "90%",
            flexWrap: "wrap",
            alignSelf: "center",
            columnGap: 10,
            marginVertical: 5
        },
        langContent: {
            backgroundColor: "white", justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 5,
            paddingHorizontal: 13
        }, txtStyle: {
            textAlign: "left",
            fontSize: 14,
            marginVertical: 9.5,
            color: colors.textBlack,
            fontFamily: AppFonts.Regular,
        }
    });
