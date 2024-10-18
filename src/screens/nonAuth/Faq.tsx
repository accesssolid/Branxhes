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
import SearchBarComp from "../components/SearchBar/SearchBarComp";
import FastImage from "react-native-fast-image";
import AppFonts from "../../constants/fonts";

const FAQ: React.FC = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    
    const faqItems = [
        { question: "What is Lorem Ipsum?", answer: localization.appkeys?.lorem },
        { question: "Why do we use it?", answer: localization.appkeys?.lorem },
        { question: "Where can I get some?", answer: localization.appkeys?.lorem },
        { question: "Is it easy to use?", answer: localization.appkeys?.lorem },
        { question: "Can I customize it?", answer: localization.appkeys?.lorem },
        { question: "What are the benefits?", answer: localization.appkeys?.lorem },
        { question: "Is it free?", answer: localization.appkeys?.lorem },
        { question: "How can I learn more?", answer: localization.appkeys?.lorem },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SolidView
                linear
                view={
                    <>
                        <MainHeader 
                            tittleOne={localization.appkeys?.faq}
                            imgLeft={images.backCircleIcon}
                            textRight=" "
                            onLeftPress={() => navigation.goBack()} 
                        />

                        <View style={styles.mainContainer}>

                            <SearchBarComp />

                            <View style={styles.edusty}>
                                {faqItems.map((item, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            borderBottomColor: colors.borderCol,
                                            borderBottomWidth: index === faqItems.length - 1 ? 0 : 2,
                                            marginBottom: 5,
                                        }}
                                    >
                                        <Pressable style={styles.beniftContain} onPress={() => toggleFAQ(index)}>
                                            <Text style={styles.beniftTxt}>{item.question}</Text>
                                            <FastImage 
                                                source={openIndex === index ? images?.upArrowIcon : images?.downArrow} 
                                                resizeMode='contain' 
                                                style={styles.imgStyle} 
                                            />
                                        </Pressable>
                                        {openIndex === index && (
                                            <Text style={styles.detailTxt}>{item.answer}</Text>
                                        )}
                                    </View>
                                ))}
                            </View>


                        </View>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default FAQ;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 15,
            paddingBottom: 20,
        },
        btnSty2: {
            marginBottom: hp(3),
            marginTop: hp(3),
            backgroundColor: colors.secendory,
            width: "80%"
        },
        edusty: {
            width: "90%",
            borderRadius: 15,
            shadowColor: "rgba(0,0,0,0.05)",
            shadowOpacity: 0.5,
            shadowRadius:5,
            shadowOffset: { height: 0, width: 1 },
            elevation: 2,
            paddingHorizontal: 10,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop: 15
        },
        beniftContain: {
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 12,
            marginBottom: 10,
        },
        imgStyle: {
            height: hp(1.3),
            width: wp(3.4),
        },
        beniftTxt: {
            fontSize: 14,
            fontFamily: AppFonts.Medium,
            textAlign: "left",
            color: colors.shadowCol,
            marginBottom:2
        },
        detailTxt: {
            fontSize: 12,
            fontFamily: AppFonts.Regular,
            textAlign: "left",
            color: colors.textBlack,
            marginBottom: 10
        }
    });
