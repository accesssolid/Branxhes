import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Pressable,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import FastImage from "react-native-fast-image";
import { hp, wp } from "../../utils/dimension";

const PhotoGallery: React.FC = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors);
    const navigation :any = useNavigation();

    const persons = [
        { id: '1', name: 'Age 1', relation: '101 photos', image: images.johnIcon ,onpress:()=>{navigation.navigate(AppRoutes.Age,{headerData:"Age 1"})}},
        { id: '2', name: 'Age 2 ', relation: '180 photos', image: images.jonuIcon },
        { id: '3', name: 'Age 3 ', relation: '170 photos', image: images.jennyIcon },
        { id: '4', name: 'Age 4 ', relation: '160 photos', image: images.jenny2Icon },
        { id: '5', name: 'Age 5 ', relation: '90 photos', image: images.johnIcon },
        { id: '6', name: 'Age 6 ', relation: '60 photos', image: images.johnIcon },
        { id: '7', name: 'Age 7 ', relation: '30 photos', image: images.johnIcon },
        { id: '8', name: 'Age 8 ', relation: '140 photos', image: images.johnIcon },
        { id: '9', name: 'Age 9 ', relation: '190 photos', image: images.johnIcon },
        { id: '10', name: 'Age 10 ', relation: '120 photos', image: images.johnIcon },
        { id: '11', name: 'Age 11',relation: '101 photos', image: images.johnIcon },
        { id: '12', name: 'Age 12', relation: '100 photos', image: images.johnIcon },
    ];

    const renderItem = ({ item }) => (
        <Pressable style={styles.container} onPress={item.onpress}>
            <FastImage source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.relation}>{item.relation}</Text>
        </Pressable>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SolidView
                linear
                view={
                    <>
                        <MainHeader
                            tittleOne={"Photo Gallery"}
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()}
                        />
                        <FlatList
                            data={persons}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={4} 
                            contentContainerStyle={styles.mainContainer}
                        />
                        <AppButton
                            titleTxt={"Add Photo"}
                            btnStyle={styles.btnSty2}
                            onPress={() => navigation.navigate(AppRoutes.PeopleWhoLikes)}
                        />
                    </>
                }
            />
        </SafeAreaView>
    );
};

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            flexGrow: 1,
            paddingBottom: 20,
        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 30,
            backgroundColor: colors.secendory,
            width: "80%",
            alignSelf: 'center', // Center the button
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: "25%", // Adjust width for four columns
            marginVertical: 8,
        },
        image: {
            height: hp(7.8),
            width: wp(16.8),
        },
        name: {
            fontSize: 10,
            fontFamily: AppFonts.SemiBold,
            textAlign: "center",
            color: colors.shadowCol,
        },
        relation: {
            fontSize: 8,
            fontFamily: AppFonts.Medium,
            textAlign: "center",
            color: colors.textGrey,
        },
    });

export default PhotoGallery;
