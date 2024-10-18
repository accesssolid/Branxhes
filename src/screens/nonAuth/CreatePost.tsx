import {
    View,
    Text,
    StyleSheet,
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    TextInput,
    FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import { hp, wp } from "../../utils/dimension";
import MainHeader from "../components/MainHeader/MainHeader";
import SocialAppButton from "../components/SocialAppButton";
import AppFonts from "../../constants/fonts";
import AppRoutes from "../../routes/RouteKeys/appRoutes";

type CreatePostProps = {
};

const CreatePost: React.FC<CreatePostProps> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne={localization.appkeys?.createPost}
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />
                
                            <View style={styles.mainContainer}>

                           { <View style={styles.edusty}>
                                <TextInput placeholder={localization.appkeys?.writeSomeText} style={styles.txtInput}
                                        multiline
                                        numberOfLines={10}
                                        textAlignVertical="top"
                                        placeholderTextColor={colors.textBlack}
                                        // onChangeText={inputHandler}
                                    />
                                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                        <SocialAppButton titleTxt={localization.appkeys?.photo} img={images?.cameraIcon1}  btnStyle={styles.socialSty}
                                        txtStyle={{fontFamily:AppFonts.Regular,fontSize:12}}/>
                                        <SocialAppButton titleTxt={localization.appkeys?.video} img={images?.videoIcon} btnStyle={styles.socialSty}
                                          txtStyle={{fontFamily:AppFonts.Regular,fontSize:12}}/>
                                    </View>
                                </View>}

                                <AppButton
                                    titleTxt={localization.appkeys?.post}
                                    btnStyle={styles.btnSty2}
                                    onPress={()=>navigation.navigate(AppRoutes.FAQ)}
                                />
                            </View>
                    
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default CreatePost;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 10,
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
            padding: 10,
            marginVertical: 8,
            minHeight: hp(23.5),
            color: colors.textBlack
        }, 
         socialSty: {
            height: hp(4.8),
             width: "47.5%",
            borderWidth: 0,
            borderRadius:10,
            backgroundColor:colors.greyCol,
            marginBottom: 10,
            // shadowColor: colors.shadowCol,
            // shadowOpacity: 0.1,
            // shadowRadius: 5,
            // shadowOffset: { height: 1, width: 2 },
            // elevation: 4,
         }
    });
