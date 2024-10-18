import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import SolidView from "../components/SolidView";
import { hp, wp } from "../../utils/dimension";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import SolidInput from "../components/SolidInput";
import MainHeader from "../components/MainHeader/MainHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
type AboutJohnDoeProps = {

};

const AboutJohnDoe: React.FC<AboutJohnDoeProps> = ({

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
        { name: "Foreign culture", code: "fr" },
        { name: "Yoga", code: "yg" },
        { name: "Hitchiking", code: "hi" },
        { name: "Plant-based food", code: "pf" },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="About John Doe"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />

                          <KeyboardAwareScrollView
                            style={{ flex: 1 }}
                            scrollEnabled={true}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >

                            <View style={styles.mainContainer}>

                                <SolidInput
                                    viewStyle={{ marginTop: 10 }}
                                    placeholder="31 - 08 - 1995"
                                    tittleText="DOB"
                                />
                                <SolidInput
                                    placeholder="Coler-Goldwater Specialty Hospital,"
                                    tittleText="Birth  Hospital"
                                    viewStyle={{ marginTop: 20 }}
                                />
                                <SolidInput
                                    placeholder="Type country"
                                    tittleText="Country you born"
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
                                        tittleText="School /College/University"
                                        subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                    />
                                    <View style={styles.inputSty}>

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, width: "52%" }}
                                            placeholder="2001"
                                            tittleText="From"
                                            subStyle={{ backgroundColor: colors.greyCol }} />

                                        <SolidInput
                                            viewStyle={{ marginTop: 10, marginBottom: 10, width: "52%" }}
                                            placeholder="2005"
                                            tittleText="To"
                                            subStyle={{ backgroundColor: colors.greyCol }}
                                        />

                                    </View>
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
                                            viewStyle={{ marginTop: 10, marginBottom: 10, width: "52%" }}
                                            placeholder="2024"
                                            tittleText="To"
                                            subStyle={{ backgroundColor: colors.greyCol }}
                                        />
                                    </View>

                                </View>

                                <TittleTextComp tittleOne="Interests / Hobbies" textStyle={styles.labelSty} />

                                <View style={styles.langContain}>
                                    {languages.map((lang) => (<Pressable key={lang.code} style={[styles.langContent, { backgroundColor: selectedLanguage.includes(lang.code) ? colors.secendory : colors.backgroundWhite }]}
                                        onPress={() => handleLanguageSelect(lang.code)} >
                                        <Text style={[styles.txtStyle, { color: selectedLanguage.includes(lang.code) ? colors.textWhite : colors.textBlack }]}>{lang.name}</Text>
                                    </Pressable>))}

                                </View>

                                <TittleTextComp tittleOne="Location History" textStyle={styles.labelSty} />


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
                                    <TextInput placeholder={localization.appkeys?.lorem} style={styles.txtInput}
                                        multiline
                                        numberOfLines={10}
                                        textAlignVertical="top"
                                        placeholderTextColor={colors.textBlack}
                                    />

                                </View>

                                <TittleTextComp tittleOne="Bio" textStyle={styles.labelSty} />

                                <View style={[styles.edusty, { marginBottom: 0, paddingVertical: 0 }]}>
                                    <TextInput
                                        placeholder={localization.appkeys?.lorem} style={[styles.txtInput, { minHeight: 100, backgroundColor: "white", padding: 0 }]}
                                        multiline
                                        numberOfLines={10}
                                        textAlignVertical="top"
                                        placeholderTextColor={colors.textBlack}
                                    />
                                </View>

                            </View>
                        </KeyboardAwareScrollView>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default AboutJohnDoe;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 15,
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
        },
        txtInput: {
            borderRadius: 10,
            backgroundColor: colors.greyCol,
            padding: 8,
            marginTop: 5,
            minHeight: 140,
            color: colors.textBlack
        }
    });
