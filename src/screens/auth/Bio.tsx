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

type Bio = {

};

const Bio: React.FC<Bio> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const inputHandler = (value: string) => {
        // setInputData(value);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="Bio"
                            textRight="3/3"
                            imgLeft={images.backCircleIcon} 
                            onLeftPress={()=>navigation.goBack()}/>

                    

                            <View style={styles.mainContainer}>

                                <Text style={styles.topText}>You have more to say? Tell your story.</Text>

                                <View style={styles.edusty}>
                                    <Text
                                        style={{ textAlign: "left", fontSize: 14,fontFamily: AppFonts.SemiBold, color: colors.textblack,marginLeft:4,marginTop:15}}>
                                        {"Write you Bio"}
                                    </Text>
                                    <TextInput placeholder="Write something about yourself..." style={styles.txtInput}
                                        multiline
                                        numberOfLines={10}
                                        textAlignVertical="top"
                                        placeholderTextColor={colors.textBlack}
                                        onChangeText={inputHandler}
                                    />
                                </View>

                                <AppButton
                                    titleTxt="Continue"
                                    btnStyle={styles.btnSty2}
                                    onPress={()=>navigation.navigate(AppRoutes.AddFamilyMembers)}
                                />

                            </View>
                      
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default Bio;

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
            alignSelf:"flex-start"
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
            paddingBottom:10,
            backgroundColor: colors.backgroundWhite,
            marginBottom: 5,
            marginTop:10
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
