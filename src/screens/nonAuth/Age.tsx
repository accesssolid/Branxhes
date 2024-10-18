import {
    View,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";

import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import MainHeader from "../components/MainHeader/MainHeader";
import { hp, wp } from "../../utils/dimension";
import FastImage from "react-native-fast-image";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
// import MasonryList from "react-native-masonry-list";


type AgeProps = {};

const Age: React.FC<AgeProps> = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SolidView
                linear
                isScrollEnabled
                view={
                    <>
                        <MainHeader
                            tittleOne="Age 0-5"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()}
                            imgRight={images.galleryIcon}
                            onRightPress={() => navigation.navigate(AppRoutes.PhotoGallery)}
                        />
                        <View style={styles.mainContainer}>


                            <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", flexWrap: "wrap", marginTop: 20, columnGap: 10, }}>

                                <FastImage source={images?.baby2Icon} resizeMode="contain" style={{ height: hp(21), width: wp(42), }} />
                                <FastImage source={images?.motherIcon} resizeMode="contain" style={{ height: hp(21), width: wp(42), }} />
                                <FastImage source={images?.smallPicIcon} resizeMode="contain" style={{ height: hp(12), width: wp(42), }} />
                                <FastImage source={images?.bigIcon} resizeMode="contain" style={{ height: hp(26), width: wp(42), }} />

                            </View>



                        </View>

                    </>

                }

            />

        </SafeAreaView>
    );
};

export default Age;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            paddingTop: 10,
            paddingBottom: 20,
            alignSelf: "center"
        },
        btnSty2: {
            position: "absolute",
            bottom: "10%",
            backgroundColor: colors.secendory,
            width: "80%",
        },

    });
