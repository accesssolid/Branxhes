import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Welcome from "../../screens/auth/Welcome";
import AppRoutes from "../RouteKeys/appRoutes";
import LanguageSelect from "../../screens/auth/LanguageSelect";
import WelcomeSc from "../../screens/auth/WelcomeSc";
import Onboarding from "../../screens/auth/Onboarding";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import CompleteDetails from "../../screens/auth/CompleteDetails";
import LocationHistory from "../../screens/auth/LocationHistory";
import Bio from "../../screens/auth/Bio";
import AddFamilyMembers from "../../screens/auth/AddFamilyMembers";
import Subscription from "../../screens/auth/Subscription";
import Verification from "../../screens/auth/Verification";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.Splash} component={Splash} />
      <Stack.Screen name={AppRoutes.Welcome} component={Welcome} />
      <Stack.Screen name={AppRoutes.LanguageSelect} component={LanguageSelect} />
      <Stack.Screen name={AppRoutes.WelcomeSc} component={WelcomeSc} />
      <Stack.Screen name={AppRoutes.Login} component={Login} />
      <Stack.Screen name={AppRoutes.Signup} component={Signup} />
      <Stack.Screen name={AppRoutes.CompleteDetails} component={CompleteDetails} />
      <Stack.Screen name={AppRoutes.LocationHistory} component={LocationHistory} />
      <Stack.Screen name={AppRoutes.Bio} component={Bio} />
      <Stack.Screen name={AppRoutes.AddFamilyMembers} component={AddFamilyMembers} />
      <Stack.Screen name={AppRoutes.Subscription} component={Subscription} />
      <Stack.Screen name={AppRoutes.Onboarding} component={Onboarding} />
      <Stack.Screen name={AppRoutes.Verification} component={Verification} />
    </Stack.Navigator>
  );
}
