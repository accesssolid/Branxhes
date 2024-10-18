import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SolidView from '../components/SolidView'
import { useNavigation, useTheme } from '@react-navigation/native';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import AppFonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import { hp, wp } from '../../utils/dimension';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader';
import MainHeader from '../components/MainHeader/MainHeader';
import MemberList from '../components/MemberProfile';

const Profile = () => {
  const navigation: any = useNavigation();
  const { colors, images } = useTheme() as any
  const styles = useStyles(colors);
  const [notificationToggle, setNotificationToggle] = useState(true);
  const [itemList, setItemList] = useState([
    {
      settingName: "Edit Profile",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.EditProfile),
      screen: "EditProfile"
    },
    {
      settingName: "My Details",
      // right_image: notificationToggle ? images.toggleon : images.toggleoff,
      onPress: () => { },
      screen: "Notification"
    },
    {

      settingName: "Profile Management",
      right_image: images.forwardedIcon,
<<<<<<< HEAD
      onPress: () => navigation.navigate(AppRoutes.InnerChat),
=======
      onPress: () => navigation.navigate(AppRoutes.ProfileManagement),
>>>>>>> 3e1b5a7228b32842295118d68c248b41ef0ef783
      screen: "Terms"
    },
    {

      settingName: "Subscription",
      right_image: images.forwardedIcon,
      onPress: () =>
<<<<<<< HEAD
        navigation.navigate(AppRoutes.AuthStack, { screen: AppRoutes.Subscription }),
=======
        navigation.navigate(AppRoutes.Subscription),
>>>>>>> 3e1b5a7228b32842295118d68c248b41ef0ef783
      screen: "Privacy"
    },
    {

      settingName: "Push Notification",
      type: "notification",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.DeleteAccount),
      screen: "deletAccount"
    },
    {
      settingName: "FAQ",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.FAQ),
      screen: "deletAccount"
    },
    {
      settingName: "Privacy Policy",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.PrivacyPolicy),
      screen: "deletAccount"
    },
    {

      settingName: "Terms & Condition",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.TermsCondition),
      screen: "deletAccount"
    },
    {

      settingName: "Deactivate or Delete Account",
      right_image: images.forwardedIcon,
      onPress: () => navigation.navigate(AppRoutes.DeactivateDelete),
      screen: "deletAccount"
    },
  ]);
  const persons = [
    { id: '1', name: 'John Doe', relation: 'Father', image: images.johnIcon },
    { id: '2', name: 'Jane Doe', relation: 'Brother', image: images.jonuIcon },
    { id: '3', name: 'Jenny Doe', relation: 'Mother', image: images.jennyIcon },
    { id: '4', name: 'Jenny Doe', relation: 'Sister', image: images.jenny2Icon },
  ];


  const Block = ({ item, index }) => {
    const isLastItem = index === itemList.length - 1; // Compare index with the length of itemList array
    return (
      <Pressable
        onPress={item?.onPress}
        style={[styles.childContainer, {
          borderBottomWidth: isLastItem ? 0 : 2,
          borderBottomColor: isLastItem ? 'transparent' : colors?.borderCol,
          marginTop: index == 0 ? 10 : 0
        }]}>

        <Text
          maxFontSizeMultiplier={1.8}
          style={styles.titleName}>{item?.settingName}</Text>

        <TouchableOpacity
          onPress={() => item?.type == 'notification' && setNotificationToggle(!notificationToggle)}
          style={{}}>
          {item?.type == 'notification' ? <FastImage resizeMode='contain' style={{ height: 28, width: 28 }} source={notificationToggle ? images.toggleon : images.toggleoff} />
            : <FastImage resizeMode='contain' style={{ height: hp(2), width: hp(2) }} source={images?.arrow} />}
        </TouchableOpacity>
      </Pressable>
    )
  }

  return (
    <SolidView
      linear
      view={
        <>
          <MainHeader
            imgLeft={images.logo}
            imgsStyle={{ height: 50, width: 42 }}
            viewStyle={{ width: "100%", borderRadius: 0, backgroundColor: colors.backgroundCol2 }}
            imgRight={images.bellIcon}
            onLeftPress={() => navigation.goBack()}
            onRightPress={() =>
              navigation.navigate(AppRoutes.Notification)
            }
          />

          <ProfileHeader imgLeft={images.profileIcon} />

          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>

            <View style={styles.mainContainer}>

              <View style={{}}>
                <MemberList
                  onpress={() => navigation.navigate(AppRoutes.PhotoGallery)}
                  changeColor
                  titleOne={"Photo Gallery"}
                  persons={persons}
                  viewStyle={{ alignSelf: "center", marginTop: 20 }}
                />
                <Text style={styles.settingTxt}>Account Settings</Text>
                <FlatList
                  contentContainerStyle={{
                    backgroundColor: "white",
                    width: "90%",
                    alignSelf: 'center',
                    borderRadius: 10,

                  }}
                  nestedScrollEnabled={true}
                  data={itemList}
                  renderItem={({ item, index }) => <Block item={item} index={index} />}
                />
              </View>
            </View>

          </ScrollView>
          <Pressable style={{ position: "absolute", right: "5%", bottom: "3%", zIndex: 9999 }} >
              <FastImage source={images.logoutIcon} resizeMode="contain" style={{ height: hp(7.25), width: wp(14.25) }} />
            </Pressable>
        </>

      }
    />
  )
}

export default Profile

const useStyles = (colors: any) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 30
  },
  childContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "white"
  },
  titleName: {
    fontSize: 16,
    color: colors.text,
    fontFamily: AppFonts.Medium,
    marginBottom: 10,
    fontWeight: "500"
  },
  settingTxt: {
    fontSize: 16,
    fontFamily: AppFonts?.Medium,
    fontWeight: "600",
    color: colors?.textBlack3,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10
  },
})