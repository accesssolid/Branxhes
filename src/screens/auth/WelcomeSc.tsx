import {
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { LocalizationContext } from "../../localization/localization";
import AppFonts from "../../constants/fonts";
import AppButton from "../components/AppButton";
import SolidView from "../components/SolidView";
import LogoComp from "../components/logoComp";
import SocialAppButton from "../components/SocialAppButton";
import FooterComp from "../components/FooterComp/FooterComp";
import AppRoutes from "../../routes/RouteKeys/appRoutes";

type Props = {

};

const WelcomeSc: React.FC<Props> = ({

}) => {

  const { localization } = useContext(LocalizationContext) as any;
  const { colors, images } = useTheme() as any;
  const styles = useStyles(colors) as any;
  const navigation: any = useNavigation();

  return (
    <SolidView
      linear
      view={
        <View style={styles.mainContainer}>
          <LogoComp
            viewStyle={{ marginTop: 20 }} />
          <Text style={styles.labelSty}>Let’s Get Started!</Text>
          <Text style={styles.topText}>Welcome to your personal family history archive. Let's preserve your legacy together.</Text>
          <SocialAppButton
            onPress={() => Alert.alert("Sign in with Google")}
            img={images.googleIcon}
            titleTxt={"Sign in with Google"}
            btnStyle={{ height: 50, width: "80%", borderWidth: 1.5, marginTop: 20, marginBottom: 10 }}
          />
          <SocialAppButton
            onPress={() => Alert.alert("Sign in with Apple")}
            titleTxt={"Sign in with Apple"}
            txtStyle={{
              color: colors.textBlack,
            }}
            img={images.appleIcon}
            btnStyle={{
              height: 50,
              width: "80%",
              borderWidth: 1.5,
              marginVertical: 5
            }}
          />
          <View style={{ position: "absolute", bottom: 0 }}>
            <AppButton
              titleTxt="Sign Up"
              btnStyle={styles.btnSty}
              onPress={() => navigation.navigate(AppRoutes.Signup)}
            />
            <AppButton
              titleTxt="Sign In"
              btnStyle={styles.btnSty2}
              onPress={() => navigation.navigate(AppRoutes.Login)}
              txtStyle={{ color: colors.textBlack }}
            />
            <FooterComp
              textCenter="Privacy Policy . Terms of Service"
              viewStyle={styles.foterSty} />
          </View>
        </View>
      }
    />
  );
};

export default WelcomeSc;

const useStyles = (colors: any) =>
  StyleSheet.create({
    mainContainer: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      paddingTop: 25
    },
    labelSty: {
      fontSize: 22,
      fontFamily: AppFonts.Bold,
      color: colors.textBlack,
      marginTop: 20,
    },
    topText: {
      fontSize: 16,
      fontFamily: AppFonts.Regular,
      color: colors.textBlack,
      textAlign: "center",
      marginTop: 10,
      paddingHorizontal: 10,
    },
    btnSty: {
      marginBottom: 20
    },
    btnSty2: {
      marginBottom: 5,
      backgroundColor: colors.secendory1
    },
    foterSty: {
      justifyContent: "center",
      backgroundColor: "null",
    }
  });
