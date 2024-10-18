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
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import MemberList from "../components/MemberProfile";
import FastImage from "react-native-fast-image";
import { hp, wp } from "../../utils/dimension";

type Bio = {

};

const PeopleWhoLikes: React.FC<Bio> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const persons = [
        { id: '1', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '2', name: 'Jane Doe', relation: 'Brother', image: images.jonuIcon },
        { id: '3', name: 'Jenny Doe', relation: 'Mother', image: images.jennyIcon },
        { id: '4', name: 'Jenny Doe', relation: 'Sister', image: images.jenny2Icon },
        { id: '5', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '6', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '7', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '8', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '9', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '10', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '11', name: 'John Doe', relation: 'Father', image: images.johnIcon },
        { id: '12', name: 'John Doe', relation: 'Father', image: images.johnIcon },

    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="People Who Liked"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />


                        <ScrollView>
                            <View style={styles.mainContainer}>

                                {persons.map((person) => (
                                    <View key={person.id} style={styles.edusty}>
                                        <View style={styles.subContain}>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Pressable>
                                                    <FastImage
                                                        resizeMode='contain'
                                                        style={styles.imgSty1}
                                                        source={person.image}
                                                    />
                                                </Pressable>

                                                <View style={{ marginLeft: 10, rowGap: 2 }}>
                                                    <Text style={styles.txtSty}>{person.name}</Text>
                                                    <Text style={[styles.txtSty, { fontSize: 10 }]}>{person.relation}</Text>
                                                </View>
                                            </View>

                                            {/* <Pressable>
                                            <FastImage
                                                resizeMode='contain'
                                                source={images.fileIcon}
                                                style={styles.imgSty2}
                                            />
                                        </Pressable> */}
                                        </View>

                                    </View>
                                ))}

                                {/* <AppButton
                                    titleTxt={"new screen"}
                                    btnStyle={styles.btnSty2}
                                    onPress={() => navigation.navigate(AppRoutes.UserProfile)}
                                /> */}

                            </View>
                        </ScrollView>

                    </>
                }
            />
        </SafeAreaView>
    );
};

export default PeopleWhoLikes;

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
            marginTop: 10
        },
        txtInput: {
            borderRadius: 10,
            backgroundColor: colors.greyCol,
            padding: 8,
            marginTop: 5,
            minHeight: 200,
            color: colors.textBlack
        }, subContain: { flexDirection: "row", alignItems: "center", paddingHorizontal: 5, justifyContent: "space-between" },
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
