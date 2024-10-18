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
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import SolidInput from "../components/SolidInput";
import FastImage from "react-native-fast-image";
import ImagePickerModal from "../components/ImagePikerModal/ImagePickerModal";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import { hp, wp } from "../../utils/dimension";
import Participants from "../components/Participants";

type GroupDetailsProp = {

};

const GroupDetails: React.FC<GroupDetailsProp> = ({

}) => {

    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();
    const [modelVisible, setModelVisible] = useState<boolean>(false);
    const [img, setImg] = useState("");
    const participantsData = [
        {
            id: '1',
            name: "Jenny",
            relation: "Sister",
            imgProfile: images.jenny2Icon,
            changeBtnCol:"true",
            
        },
        {
            id: '2',
            name: "John",
            relation: "Brother",
            imgProfile: images.johnIcon,
          
        },
        {
            id: '3',
            name: "Jane",
            relation: "Cousin",
            imgProfile: images.janeIcon,
          
        },
        {
            id: '4',
            name: "Doe",
            relation: "Friend",
            imgProfile: images.doeIcon,
            
        },
    ];

    const renderParticipant = ({ item }: { item: any }) => (
        <Participants
                 btnTxt={"remove"}
                 changeBtnCol={true}
                 name={item.name}
                 relation={item.relation}
                 imgProfile={item.imgProfile}
             />
                 
         );

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SolidView
                linear
                isScrollEnabled
                view={
                    <>
                        <MainHeader tittleOne="Group Details"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()} />



                        <View style={styles.mainContainer}>

                            <View style={styles.edusty}>
                                <Pressable
                                    onPress={() => setModelVisible(true)}
                                    style={styles.selectimgView}>
                                    {
                                        img?.path ? (
                                            <FastImage
                                                resizeMode="cover"
                                                source={{ uri: img?.path }}
                                                style={styles.profileImg}
                                            >
                                                <FastImage
                                                    resizeMode="contain"
                                                    source={images?.editicon}
                                                    style={styles.editImage}
                                                />
                                            </FastImage>
                                        ) : (
                                            <FastImage
                                                resizeMode="cover"
                                                source={images?.eyeIcon}
                                                style={styles.profileImg}
                                            >
                                                <FastImage
                                                    resizeMode="contain"
                                                    source={images?.editicon}
                                                    style={styles.editImage}
                                                />
                                            </FastImage>
                                        )
                                    }


                                    <Pressable
                                        onPress={() => setModelVisible(true)}
                                    >
                                        <Text
                                            maxFontSizeMultiplier={2}
                                            style={styles.uploadspaTxt}>
                                            Change Picture
                                        </Text>
                                    </Pressable>
                                </Pressable>

                                <SolidInput
                                    viewStyle={{ marginVertical: 10 }}
                                    placeholder="Family Group"
                                    tittleText="Group name"
                                    subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                />
                            </View>

                            <TittleTextComp tittleOne="Add Participants" textStyle={styles.labelSty} />
                            <View style={{ width: "100%", alignSelf: "center", justifyContent: "center", }}>
                                <FlatList
                                    data={participantsData}
                                    renderItem={renderParticipant}
                                    keyExtractor={(item) => item.id}
                                    nestedScrollEnabled={true}
                                />
                            </View>

                            <AppButton
                                titleTxt="Delete Group"
                                btnStyle={styles.btnSty1}
                                onPress={() => navigation.navigate(AppRoutes.AddFamilyMembers)}
                            />
                            <AppButton
                                titleTxt="Update Group"
                                btnStyle={styles.btnSty2}
                                onPress={() => navigation.navigate(AppRoutes.ProfileManagement)}
                            />

                        </View>
                        <ImagePickerModal
                            attachments={(img: any) => {
                                setImg(img)
                            }}
                            isVisible={modelVisible}
                            onClose={() => setModelVisible(false)}
                            pressHandler={() => { setModelVisible(false) }}
                        />

                    </>
                }
            />
        </SafeAreaView>
    );
};

export default GroupDetails;

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
            marginBottom: 30,
            marginTop: 30,
            backgroundColor: colors.secendory,
            width: "80%"
        },
        btnSty1: {
            marginTop: 30,
            backgroundColor: colors.redCol,
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
        uploadspaTxt: {
            fontSize: 12,
            color: colors.textBlack,
            fontFamily: AppFonts.Medium,
            marginTop: 7,
            textAlign: "left",
        },
        profileImg: {
            height: hp(8),
            width: wp(17.8),
            borderRadius: 15,
            alignSelf: "center",
            alignItems: 'center',
            justifyContent: 'center'
        },
        editImage: {
            height: hp(2.3),
            width: wp(4.6)
        },
        selectimgView: {
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
        },
        labelSty: {
            fontSize: 16,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack3,
            marginTop: 10,
            marginBottom: 5
        }
    });
