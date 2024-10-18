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
import ProfileFeed from "../components/ProfileFeed";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";

type UserProfileProps = {

};

const UserProfile: React.FC<UserProfileProps> = ({

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
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                view={
                    <>
                        <MainHeader tittleOne="User Profile"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />


                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.mainContainer}>

                                <MemberList
                                    onpress={()=>navigation.navigate(AppRoutes.PhotoGallery)}
                                    changeColor
                                    titleOne={"Photo Gallery"}
                                    persons={persons} 
                                    />

                                <Pressable style={styles.edusty} onPress={()=>navigation.navigate(AppRoutes.AboutJohnDoe)}>
                                    <Text style={styles.topText}>About John Doe</Text>
                                    <FastImage source={images?.rightArrow} resizeMode="contain" style={styles.imgSty1} />
                                </Pressable>

                                <TittleTextComp tittleOne="Family Feed" viewStyle={{ marginVertical: 10 }} />

                                <ProfileFeed />


                            </View>
                        </ScrollView>

                    </>
                }
            />
        </SafeAreaView>
    );
};

export default UserProfile;

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
            fontFamily: AppFonts.Medium,
            color: colors.shadowCol,
            textAlign: "left",
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
            shadowColor: "rgba(0,0,0,0.08)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowOffset: { height: 0, width: 2 },
            elevation: 4,
            paddingHorizontal: 10,
            backgroundColor: colors.backgroundWhite,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            height: hp(8),
            marginVertical: 10,
        },
        imgSty1: {
            height: hp(1.5),
            width: wp(3),
        },
    });
