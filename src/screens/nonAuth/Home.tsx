import React, { useContext, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import SearchBarComp from "../components/SearchBar/SearchBarComp";
import TittleTextComp from "../components/TittleComponent/TittleTextComp";
import ProfileFeed from "../components/ProfileFeed";
import MemberList from "../components/MemberProfile";
import FastImage from "react-native-fast-image";
import ComonModal from "../components/ComonModal";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { hp, wp } from "../../utils/dimension";
import MainHeader from "../components/MainHeader/MainHeader";

const DashBoard: React.FC = () => {
  const { localization } = useContext(LocalizationContext) as any;
  const { colors, images } = useTheme() as any;
  const styles = useStyles(colors);
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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
            <MainHeader
              imgLeft={images.logo}
              imgsStyle={{ height: 50, width: 42 }}
              viewStyle={{ width: "100%", borderRadius: 0, backgroundColor: colors.backgroundCol2 }}
              imgRight={images.bellIcon}
              onRightPress={() =>
                navigation.navigate(AppRoutes.Notification)
              }
              onLeftPress={() => navigation.goBack()}
            />

            <ProfileHeader imgRight={images.profileIcon} />

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.mainContainer}>
                <SearchBarComp />
                <TittleTextComp tittleOne="Family Tree" tittleTwo="View all" viewStyle={{ marginVertical: 10 }} />
                <MemberList persons={persons} />
                <TittleTextComp tittleOne="Family Feed" viewStyle={{ marginVertical: 10 }} />
                <ProfileFeed />
                <ProfileFeed mainContainer={{marginTop:hp(2.5)}}/>
                <AppButton
                  titleTxt="Continue"
                  btnStyle={styles.btnSty2}
                  onPress={() => navigation.navigate(AppRoutes.CreateGroup)}
                />
              </View>

              <ComonModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
            </ScrollView>

            <Pressable style={{ position: "absolute", right: "10%", bottom: "3%", zIndex: 9999 }} onPress={() => setModalVisible(!modalVisible)}>
              <FastImage source={images.addMoreIcon} resizeMode="contain" style={{ height: hp(6.25), width: wp(12.25) }} />
            </Pressable>
          </>
        }
      />
    </SafeAreaView>
  );
};

const useStyles = (colors: any) => StyleSheet.create({
  mainContainer: {
    flex: 1,
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
});

export default DashBoard;
