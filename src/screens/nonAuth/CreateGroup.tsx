import {
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import MainHeader from "../components/MainHeader/MainHeader";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import ImageUpload from "../components/ImageUpload";
import SolidInput from "../components/SolidInput";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import Participants from "../components/Participants";

type CreateGroupProps = {};

const CreateGroup: React.FC<CreateGroupProps> = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();

    const participantsData = [
        {
            id: '1',
            btnTxt:"Add",
            name: "Jenny",
            relation: "Sister",
            imgProfile: images.jenny2Icon,
        },
        {
            id: '2',
            btnTxt:"Remove",
            name: "John",
            relation: "Brother",
            imgProfile: images.johnIcon,
            changeBtnCol:true
        },
        {
            id: '3',
            btnTxt:"Add",
            name: "Jane",
            relation: "Cousin",
            imgProfile: images.janeIcon,
        },
        {
            id: '4',
            btnTxt:"Remove",
            name: "Doe",
            relation: "Friend",
            imgProfile: images.doeIcon,
            changeBtnCol:true
        },
    ];

    const renderParticipant = ({ item }: { item: any }) => (
   <Participants
            btnTxt={item.btnTxt}
            changeBtnCol={item.changeBtnCol}
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
                        <MainHeader
                            tittleOne="Create Group"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()}
                        />
                        <View style={styles.mainContainer}>
                            <View style={styles.edusty}>
                                <ImageUpload />
                                <SolidInput
                                    viewStyle={{ marginVertical: 10 }}
                                    placeholder="Family Group"
                                    tittleText="Group name"
                                    subStyle={{ backgroundColor: colors.greyCol, width: "100%" }}
                                />
                            </View>

                            <TittleTextComp tittleOne="Add Participants" textStyle={styles.labelSty} />

                            <View style={{width:"100%",alignSelf:"center",justifyContent:"center",}}>
                            <FlatList
                                data={participantsData}
                                renderItem={renderParticipant}
                                keyExtractor={(item) => item.id}
                                nestedScrollEnabled={true}
                            />
                            </View>

                            <AppButton
                                titleTxt="Create Group"
                                btnStyle={styles.btnSty2}
                                onPress={() => navigation.navigate(AppRoutes.GroupDetails)}
                            />
                        </View>
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default CreateGroup;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 20,
            alignSelf:"center"
        },
        labelSty: {
            fontSize: 16,
            textAlign: "left",
            fontFamily: AppFonts.SemiBold,
            color: colors.textBlack3,
            marginTop: 10,
            marginBottom: 5,
        },
        btnSty2: {
            marginBottom: 30,
            marginTop: 30,
            backgroundColor: colors.secendory,
            width: "80%",
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
            marginTop: 10,
        },
    });
