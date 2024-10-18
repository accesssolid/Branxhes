import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/nonAuth/Home";
import AppRoutes from "../RouteKeys/appRoutes";
import BottomTab from "../BottomTab/BottomTab";
import EditProfile from "../../screens/nonAuth/EditProfile";
import ChangePassword from "../../screens/nonAuth/ChangePassword";
import PrivacyPolicy from "../../screens/nonAuth/PrivacyPolicy";
import TermsCondition from "../../screens/nonAuth/TermsCondition";
import CreatePost from "../../screens/nonAuth/CreatePost";
import FAQ from "../../screens/nonAuth/Faq";
import Notification from "../../screens/nonAuth/Notification";
import InnerChat from "../../screens/nonAuth/InnerChat";
import DeactivateDelete from "../../screens/nonAuth/DeactivateDelete";

import PeopleWhoLikes from "../../screens/nonAuth/PeopleWhoLike";
import PhotoGallery from "../../screens/nonAuth/PhotoGallery";
import UserProfile from "../../screens/nonAuth/UserProfile";
import AboutJohnDoe from "../../screens/nonAuth/AboutJohnDoe";
import CreateGroup from "../../screens/nonAuth/CreateGroup";
import GroupDetails from "../../screens/nonAuth/GroupDetails";
import ProfileManagement from "../../screens/nonAuth/ProfileManagement";
import AddPhotos from "../../screens/nonAuth/AddPhotos";
import Age from "../../screens/nonAuth/Age";

export default function NonAuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.BottomTab} component={BottomTab} />
      <Stack.Screen name={AppRoutes.EditProfile} component={EditProfile} />
      <Stack.Screen name={AppRoutes.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={AppRoutes.PrivacyPolicy} component={PrivacyPolicy} />
      <Stack.Screen name={AppRoutes.TermsCondition} component={TermsCondition} />
      <Stack.Screen name={AppRoutes.CreatePost} component={CreatePost} />
      <Stack.Screen name={AppRoutes.FAQ} component={FAQ} />
      <Stack.Screen name={AppRoutes.DeactivateDelete} component={DeactivateDelete} />
      <Stack.Screen name={AppRoutes.PhotoGallery} component={PhotoGallery} />
      <Stack.Screen name={AppRoutes.PeopleWhoLikes} component={PeopleWhoLikes} />
      <Stack.Screen name={AppRoutes.UserProfile} component={UserProfile} />
      <Stack.Screen name={AppRoutes.AboutJohnDoe} component={AboutJohnDoe} />
      <Stack.Screen name={AppRoutes.CreateGroup} component={CreateGroup} />
      <Stack.Screen name={AppRoutes.GroupDetails} component={GroupDetails} />
      <Stack.Screen name={AppRoutes.ProfileManagement} component={ProfileManagement} />
      <Stack.Screen name={AppRoutes.AddPhotos} component={AddPhotos} />
      <Stack.Screen name={AppRoutes.Age} component={Age} />
      <Stack.Screen name={AppRoutes.Home} component={Home} />
      <Stack.Screen name={AppRoutes.Notification} component={Notification} />
      <Stack.Screen name={AppRoutes.InnerChat} component={InnerChat} />
    </Stack.Navigator>
  );
}
