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

type ProfileManagementProp = {};

const ProfileManagement: React.FC<ProfileManagementProp> = () => {
    const { localization } = useContext(LocalizationContext) as any;
    const { colors, images } = useTheme() as any;
    const styles = useStyles(colors) as any;
    const navigation: any = useNavigation();

    const participantsData = [
        {
            id: '1',
         
            name: "Jenny",
            relation: "Sister",
            imgProfile: images.jenny2Icon,
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
            btnTxt={"Switch Profile"}
            btnWidth
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
                            tittleOne="Profile Management"
                            imgLeft={images.backCircleIcon}
                            onLeftPress={() => navigation.goBack()}
                        />
                        <View style={styles.mainContainer}>

                        <View style={{ width: "100%", alignSelf: "center", justifyContent: "center" }}>
                        
                            <FlatList
                                data={participantsData}
                                renderItem={renderParticipant}
                                keyExtractor={(item) => item.id}
                                nestedScrollEnabled={true}
                            />
                            </View>
                          

                        
                        </View>
                
                    </>
                      
                }
          
            />
                     <AppButton
                          titleTxt="Add Profile"
                          btnStyle={styles.btnSty2}
                          onPress={() => navigation.navigate(AppRoutes.AddPhotos)}
                      />
        </SafeAreaView>
    );
};

export default ProfileManagement;

const useStyles = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            height: "100%",
            width: "100%",
            paddingTop: 10,
            paddingBottom: 20,
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
             position:"absolute",
             bottom:"10%",
             backgroundColor: colors.secendory,
             width: "80%",
        },

    });
